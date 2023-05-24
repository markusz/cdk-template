#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Tags } from 'aws-cdk-lib';
import AppStack from '../lib/app-stack';

const app = new cdk.App();

const appStack = new AppStack(app, 'App', {
  env: {
    region: 'eu-central-1',
    account: '663435210076',
  },
});

Tags.of(app).add('project', 'XYZ');
