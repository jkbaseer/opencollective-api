import nock from 'nock';

export default function() {

  nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/tokens', "card%5Bnumber%5D=4242424242424242&card%5Bexp_month%5D=12&card%5Bexp_year%5D=2028&card%5Bcvc%5D=222")
  .reply(200, {"id":"tok_1BbcNJDjPFcHOcTmIlIAF11R","object":"token","card":{"id":"card_1BbcNIDjPFcHOcTm1VD2t0iN","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","cvc_check":"unchecked","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"ftgJeBXvQSZ4HMCg","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null},"client_ip":"68.173.154.69","created":1513894729,"livemode":false,"type":"card","used":false}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:18:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '781',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_hK2XQCSklDFxj6',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/tokens', "card%5Bnumber%5D=4242424242424242&card%5Bexp_month%5D=12&card%5Bexp_year%5D=2028&card%5Bcvc%5D=222")
  .reply(200, {"id":"tok_1BbcNJDjPFcHOcTmL4izWYAx","object":"token","card":{"id":"card_1BbcNJDjPFcHOcTmlTChhbZ5","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","cvc_check":"unchecked","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"ftgJeBXvQSZ4HMCg","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null},"client_ip":"68.173.154.69","created":1513894729,"livemode":false,"type":"card","used":false}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:18:49 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '781',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_614eT8L3Wm1puK',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('http://api.fixer.io:80', {"encodedQueryParams":true})
  .get('/latest')
  .query({"base":"USD","symbols":"EUR"})
  .reply(200, {"base":"USD","date":"2017-12-21","rates":{"EUR":0.84324}}, [ 'Server',
  'nginx/1.13.6',
  'Date',
  'Thu, 21 Dec 2017 22:18:50 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '58',
  'Connection',
  'close',
  'Cache-Control',
  'public, must-revalidate, max-age=900',
  'Last-Modified',
  'Thu, 21 Dec 2017 00:00:00 GMT',
  'Vary',
  'Origin',
  'X-Content-Type-Options',
  'nosniff' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/customers', "source=tok_1BbcNJDjPFcHOcTmL4izWYAx&description=https%3A%2F%2Fopencollective.com%2Fuser2&email=user2%40opencollective.com")
  .reply(200, {"id":"cus_Bzba8k5ae9FUi5","object":"customer","account_balance":0,"created":1513894730,"currency":null,"default_source":"card_1BbcNJDjPFcHOcTmlTChhbZ5","delinquent":false,"description":"https://opencollective.com/user2","discount":null,"email":"user2@opencollective.com","livemode":false,"metadata":{},"shipping":null,"sources":{"object":"list","data":[{"id":"card_1BbcNJDjPFcHOcTmlTChhbZ5","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","customer":"cus_Bzba8k5ae9FUi5","cvc_check":"pass","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"ftgJeBXvQSZ4HMCg","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null}],"has_more":false,"total_count":1,"url":"/v1/customers/cus_Bzba8k5ae9FUi5/sources"},"subscriptions":{"object":"list","data":[],"has_more":false,"total_count":0,"url":"/v1/customers/cus_Bzba8k5ae9FUi5/subscriptions"}}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:18:51 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1432',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_Hj4HsS1ergB72V',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/tokens', "customer=cus_Bzba8k5ae9FUi5")
  .reply(200, {"id":"tok_1BbcNMLzdXg9xKNSV3OOMESx","object":"token","card":{"id":"card_1BbcNMLzdXg9xKNSq5c6UfKe","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","cvc_check":"pass","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"1ePEQxDFh2TKt5lo","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null},"client_ip":"68.173.154.69","created":1513894732,"livemode":false,"type":"card","used":false}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:18:52 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '776',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_cJK8VUhPAjBN8r',
  'Stripe-Account',
  'acct_18KWlTLzdXg9xKNS',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/customers', "source=tok_1BbcNMLzdXg9xKNSV3OOMESx&description=https%3A%2F%2Fopencollective.com%2Fuser2&email=user2%40opencollective.com")
  .reply(200, {"id":"cus_BzbaxFjxW8Df3M","object":"customer","account_balance":0,"created":1513894732,"currency":null,"default_source":"card_1BbcNMLzdXg9xKNSq5c6UfKe","delinquent":false,"description":"https://opencollective.com/user2","discount":null,"email":"user2@opencollective.com","livemode":false,"metadata":{},"shipping":null,"sources":{"object":"list","data":[{"id":"card_1BbcNMLzdXg9xKNSq5c6UfKe","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","customer":"cus_BzbaxFjxW8Df3M","cvc_check":"pass","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"1ePEQxDFh2TKt5lo","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null}],"has_more":false,"total_count":1,"url":"/v1/customers/cus_BzbaxFjxW8Df3M/sources"},"subscriptions":{"object":"list","data":[],"has_more":false,"total_count":0,"url":"/v1/customers/cus_BzbaxFjxW8Df3M/subscriptions"}}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:18:53 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1432',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_2DhdL7Xc0XEE3I',
  'Stripe-Account',
  'acct_18KWlTLzdXg9xKNS',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/charges', "amount=5000&currency=USD&customer=cus_BzbaxFjxW8Df3M&description=Donation%20to%20tipbox&application_fee=250&metadata%5Bfrom%5D=http%3A%2F%2Flocalhost%3A3000%2Fuser2&metadata%5Bto%5D=http%3A%2F%2Flocalhost%3A3000%2Ftipbox&metadata%5BcustomerEmail%5D=user2%40opencollective.com&metadata%5BPaymentMethodId%5D=3")
  .reply(200, {"id":"ch_1BbcNOLzdXg9xKNSQsltIjhv","object":"charge","amount":5000,"amount_refunded":0,"application":"ca_68FQcZXEcV66Kjg7egLnR1Ce87cqwoue","application_fee":"fee_1BbcNOLzdXg9xKNSTGml6ijw","balance_transaction":"txn_1BbcNOLzdXg9xKNSfdDMCIm2","captured":true,"created":1513894734,"currency":"usd","customer":"cus_BzbaxFjxW8Df3M","description":"Donation to tipbox","destination":null,"dispute":null,"failure_code":null,"failure_message":null,"fraud_details":{},"invoice":null,"livemode":false,"metadata":{"from":"http://localhost:3000/user2","to":"http://localhost:3000/tipbox","customerEmail":"user2@opencollective.com","PaymentMethodId":"3"},"on_behalf_of":null,"order":null,"outcome":{"network_status":"approved_by_network","reason":null,"risk_level":"normal","seller_message":"Payment complete.","type":"authorized"},"paid":true,"receipt_email":null,"receipt_number":null,"refunded":false,"refunds":{"object":"list","data":[],"has_more":false,"total_count":0,"url":"/v1/charges/ch_1BbcNOLzdXg9xKNSQsltIjhv/refunds"},"review":null,"shipping":null,"source":{"id":"card_1BbcNMLzdXg9xKNSq5c6UfKe","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","customer":"cus_BzbaxFjxW8Df3M","cvc_check":"pass","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"1ePEQxDFh2TKt5lo","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null},"source_transfer":null,"statement_descriptor":null,"status":"succeeded","transfer_group":null}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:18:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2012',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_F3g6lA8DVbQAaC',
  'Stripe-Account',
  'acct_18KWlTLzdXg9xKNS',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .get('/v1/balance/history/txn_1BbcNOLzdXg9xKNSfdDMCIm2')
  .reply(200, {"id":"txn_1BbcNOLzdXg9xKNSfdDMCIm2","object":"balance_transaction","amount":5000,"available_on":1514246400,"created":1513894734,"currency":"usd","description":"Donation to tipbox","fee":425,"fee_details":[{"amount":250,"application":"ca_68FQcZXEcV66Kjg7egLnR1Ce87cqwoue","currency":"usd","description":"OpenCollective application fee","type":"application_fee"},{"amount":175,"application":null,"currency":"usd","description":"Stripe processing fees","type":"stripe_fee"}],"net":4575,"source":"ch_1BbcNOLzdXg9xKNSQsltIjhv","sourced_transfers":{"object":"list","data":[],"has_more":false,"total_count":0,"url":"/v1/transfers?source_transaction=ch_1BbcNOLzdXg9xKNSQsltIjhv"},"status":"pending","type":"charge"}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:18:55 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '902',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_nyWB8Y4fskXqR3',
  'Stripe-Account',
  'acct_18KWlTLzdXg9xKNS',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/customers', "source=tok_1BbcNJDjPFcHOcTmIlIAF11R&description=https%3A%2F%2Fopencollective.com%2Fuser2&email=user1%40opencollective.com")
  .reply(200, {"id":"cus_BzbazHrL3szEUn","object":"customer","account_balance":0,"created":1513894736,"currency":null,"default_source":"card_1BbcNIDjPFcHOcTm1VD2t0iN","delinquent":false,"description":"https://opencollective.com/user2","discount":null,"email":"user1@opencollective.com","livemode":false,"metadata":{},"shipping":null,"sources":{"object":"list","data":[{"id":"card_1BbcNIDjPFcHOcTm1VD2t0iN","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","customer":"cus_BzbazHrL3szEUn","cvc_check":"pass","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"ftgJeBXvQSZ4HMCg","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null}],"has_more":false,"total_count":1,"url":"/v1/customers/cus_BzbazHrL3szEUn/sources"},"subscriptions":{"object":"list","data":[],"has_more":false,"total_count":0,"url":"/v1/customers/cus_BzbazHrL3szEUn/subscriptions"}}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:18:57 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1432',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_qjkvwtycKha1JR',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/tokens', "customer=cus_BzbazHrL3szEUn")
  .reply(200, {"id":"tok_1BbcNSLzdXg9xKNSaRqIlxZz","object":"token","card":{"id":"card_1BbcNRLzdXg9xKNSAeGTcVT5","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","cvc_check":"pass","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"1ePEQxDFh2TKt5lo","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null},"client_ip":"68.173.154.69","created":1513894738,"livemode":false,"type":"card","used":false}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:18:58 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '776',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_xdav9LBU75he8e',
  'Stripe-Account',
  'acct_18KWlTLzdXg9xKNS',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/customers', "source=tok_1BbcNSLzdXg9xKNSaRqIlxZz&description=https%3A%2F%2Fopencollective.com%2Fuser2&email=user1%40opencollective.com")
  .reply(200, {"id":"cus_BzbaEAqpPsnfoX","object":"customer","account_balance":0,"created":1513894739,"currency":null,"default_source":"card_1BbcNRLzdXg9xKNSAeGTcVT5","delinquent":false,"description":"https://opencollective.com/user2","discount":null,"email":"user1@opencollective.com","livemode":false,"metadata":{},"shipping":null,"sources":{"object":"list","data":[{"id":"card_1BbcNRLzdXg9xKNSAeGTcVT5","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","customer":"cus_BzbaEAqpPsnfoX","cvc_check":"pass","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"1ePEQxDFh2TKt5lo","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null}],"has_more":false,"total_count":1,"url":"/v1/customers/cus_BzbaEAqpPsnfoX/sources"},"subscriptions":{"object":"list","data":[],"has_more":false,"total_count":0,"url":"/v1/customers/cus_BzbaEAqpPsnfoX/subscriptions"}}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:19:00 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '1432',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_jlH13Vdn6cYT7O',
  'Stripe-Account',
  'acct_18KWlTLzdXg9xKNS',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/charges', "amount=10000&currency=USD&customer=cus_BzbaEAqpPsnfoX&description=Matching%202x%20user2's%20donation&application_fee=500&metadata%5Bfrom%5D=http%3A%2F%2Flocalhost%3A3000%2Fuser2&metadata%5Bto%5D=http%3A%2F%2Flocalhost%3A3000%2Ftipbox&metadata%5BcustomerEmail%5D=user1%40opencollective.com&metadata%5BPaymentMethodId%5D=2")
  .reply(200, {"id":"ch_1BbcNULzdXg9xKNSB1VJURDh","object":"charge","amount":10000,"amount_refunded":0,"application":"ca_68FQcZXEcV66Kjg7egLnR1Ce87cqwoue","application_fee":"fee_1BbcNULzdXg9xKNS0uUXXfWh","balance_transaction":"txn_1BbcNVLzdXg9xKNSCEaOBrtH","captured":true,"created":1513894740,"currency":"usd","customer":"cus_BzbaEAqpPsnfoX","description":"Matching 2x user2's donation","destination":null,"dispute":null,"failure_code":null,"failure_message":null,"fraud_details":{},"invoice":null,"livemode":false,"metadata":{"from":"http://localhost:3000/user2","to":"http://localhost:3000/tipbox","customerEmail":"user1@opencollective.com","PaymentMethodId":"2"},"on_behalf_of":null,"order":null,"outcome":{"network_status":"approved_by_network","reason":null,"risk_level":"normal","seller_message":"Payment complete.","type":"authorized"},"paid":true,"receipt_email":null,"receipt_number":null,"refunded":false,"refunds":{"object":"list","data":[],"has_more":false,"total_count":0,"url":"/v1/charges/ch_1BbcNULzdXg9xKNSB1VJURDh/refunds"},"review":null,"shipping":null,"source":{"id":"card_1BbcNRLzdXg9xKNSAeGTcVT5","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","customer":"cus_BzbaEAqpPsnfoX","cvc_check":"pass","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"1ePEQxDFh2TKt5lo","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null},"source_transfer":null,"statement_descriptor":null,"status":"succeeded","transfer_group":null}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:19:01 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '2023',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_CnR0czru7mmgp1',
  'Stripe-Account',
  'acct_18KWlTLzdXg9xKNS',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .get('/v1/balance/history/txn_1BbcNVLzdXg9xKNSCEaOBrtH')
  .reply(200, {"id":"txn_1BbcNVLzdXg9xKNSCEaOBrtH","object":"balance_transaction","amount":10000,"available_on":1514246400,"created":1513894740,"currency":"usd","description":"Matching 2x user2's donation","fee":820,"fee_details":[{"amount":500,"application":"ca_68FQcZXEcV66Kjg7egLnR1Ce87cqwoue","currency":"usd","description":"OpenCollective application fee","type":"application_fee"},{"amount":320,"application":null,"currency":"usd","description":"Stripe processing fees","type":"stripe_fee"}],"net":9180,"source":"ch_1BbcNULzdXg9xKNSB1VJURDh","sourced_transfers":{"object":"list","data":[],"has_more":false,"total_count":0,"url":"/v1/transfers?source_transaction=ch_1BbcNULzdXg9xKNSB1VJURDh"},"status":"pending","type":"charge"}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:19:02 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '913',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_grUposnLVlJPJL',
  'Stripe-Account',
  'acct_18KWlTLzdXg9xKNS',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/tokens', "card%5Bnumber%5D=4242424242424242&card%5Bexp_month%5D=12&card%5Bexp_year%5D=2028&card%5Bcvc%5D=222")
  .reply(200, {"id":"tok_1BbcNZDjPFcHOcTmxYufJH2r","object":"token","card":{"id":"card_1BbcNZDjPFcHOcTm3eh3hrQR","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","cvc_check":"unchecked","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"ftgJeBXvQSZ4HMCg","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null},"client_ip":"68.173.154.69","created":1513894745,"livemode":false,"type":"card","used":false}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:19:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '781',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_zs5COZIPyCqoxI',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

nock('https://api.stripe.com:443', {"encodedQueryParams":true})
  .post('/v1/tokens', "card%5Bnumber%5D=4242424242424242&card%5Bexp_month%5D=12&card%5Bexp_year%5D=2028&card%5Bcvc%5D=222")
  .reply(200, {"id":"tok_1BbcNZDjPFcHOcTmRFLb4lBB","object":"token","card":{"id":"card_1BbcNZDjPFcHOcTmnBY9LGiv","object":"card","address_city":null,"address_country":null,"address_line1":null,"address_line1_check":null,"address_line2":null,"address_state":null,"address_zip":null,"address_zip_check":null,"brand":"Visa","country":"US","cvc_check":"unchecked","dynamic_last4":null,"exp_month":12,"exp_year":2028,"fingerprint":"ftgJeBXvQSZ4HMCg","funding":"credit","last4":"4242","metadata":{},"name":null,"tokenization_method":null},"client_ip":"68.173.154.69","created":1513894745,"livemode":false,"type":"card","used":false}, [ 'Server',
  'nginx',
  'Date',
  'Thu, 21 Dec 2017 22:19:05 GMT',
  'Content-Type',
  'application/json',
  'Content-Length',
  '781',
  'Connection',
  'close',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Allow-Methods',
  'GET, POST, HEAD, OPTIONS, DELETE',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Expose-Headers',
  'X-Stripe-Privileged-Session-Required,stripe-manage-version,X-Stripe-External-Auth-Required',
  'Access-Control-Max-Age',
  '300',
  'Cache-Control',
  'no-cache, no-store',
  'Request-Id',
  'req_YcbgRE6QJszNxz',
  'Stripe-Version',
  '2015-04-07',
  'Strict-Transport-Security',
  'max-age=31556926; includeSubDomains; preload' ]);

}