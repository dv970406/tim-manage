import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

export const TRIGGER_RECEIVE_NOTIFICATION = 'TRIGGER_RECEIVE_NOTIFICATION';
export const TRIGGER_RECEIVE_IN_ROOM = 'TRIGGER_RECEIVE_IN_ROOM';
export const TRIGGER_RECEIVE_MESSAGE = 'TRIGGER_RECEIVE_MESSAGE';
