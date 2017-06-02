import { expect } from 'chai';
import * as utils from '../test/utils';
import models from '../server/models';

import * as hostlib from '../server/lib/hostlib';

describe('hostlib', () => {
  
  const hostid = 3; // WWCode host
  const startDate = new Date("2017-02-01");
  const endDate = new Date("2017-03-01");
  let groupids;

  const where = {
    GroupId: { $in: groupids },
    createdAt: { $gte: startDate, $lt: endDate}
  };

  before(() => utils.loadDB("wwcode_test"));

  beforeEach('get hosted collectives', () => hostlib.getHostedGroups(hostid).then(groups => {
    groupids = groups.map(g => g.id);
    where.GroupId = { $in: groupids };
    expect(groups.length).to.equal(73);
    return true;
  }).catch(console.error));

  it('get the backers stats', () => hostlib.getBackersStats(groupids, startDate, endDate).then(stats => {
    expect(stats.new).to.equal(0);
    expect(stats.repeat).to.equal(8);
    expect(stats.total).to.equal(55);
    return true;
  }));

  it('get the total amount of funds held by the host', () => hostlib.sumTransactionsByCurrency("netAmountInGroupCurrency", where).then(res => {
    const usd = res.find(a => a.currency === 'USD');
    expect(usd.amount).to.equal(439541);
    expect(res.length).to.equal(2);
    return true;
  }));

  it('get the total amount of funds held by the host in host currency', () => hostlib.sumTransactions("netAmountInGroupCurrency", where).then(res => {
    expect(res.byCurrency).to.have.length(2);
    expect(res.totalInHostCurrency).to.equal(459011.1);
    return true;
  }));

  it('get the total net amount of host fees', () => hostlib.sumTransactions("hostFeeInTxnCurrency", where).then(res => {
    expect(res.byCurrency).to.have.length(2);
    expect(res.totalInHostCurrency).to.equal(12063.11);
    const cad = res.byCurrency.find(a => a.currency === 'CAD');
    expect(cad.amount).to.equal(1120);
    return true;
  }));

});