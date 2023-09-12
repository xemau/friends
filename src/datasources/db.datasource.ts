import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

// const config = {
//   name: 'db',
//   connector: 'postgresql',
//   url: '',
//   host: 'localhost',
//   port: 5433,
//   user: 'kornel',
//   password: '',
//   database: 'friends'
// };

const config = {
  name: 'PostgreSQL-Friends',
  connector: 'postgresql',
  url: 'postgres://kornel:t2DMyudxQ717ZWbryyhmjpVcn8gjBDup@dpg-ck0587fhdsdc73cs7kjg-a.frankfurt-postgres.render.com/friends_3l2q',
  host: 'dpg-ck0587fhdsdc73cs7kjg-a',
  port: 5432,
  user: 'kornel',
  password: 't2DMyudxQ717ZWbryyhmjpVcn8gjBDup',
  database: 'friends_3l2q',
  ssl: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
