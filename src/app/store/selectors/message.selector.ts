import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MessageStateInterface } from 'src/app/models/types/states/messageState.interface';

export const messageFeatureSelector =
  createFeatureSelector<MessageStateInterface>('message');

export const isLoadingSelector = createSelector(
  messageFeatureSelector,
  (messageState: MessageStateInterface) => messageState.isLoading
);

export const isLoadingOffsetSelector = createSelector(
  messageFeatureSelector,
  (messageState: MessageStateInterface) => messageState.isLoading_offset
);

export const tempMessagesSelector = createSelector(
  messageFeatureSelector,
  (messageState: MessageStateInterface) => messageState.room?.tempMessages
);

export const roomSelector = createSelector(
  messageFeatureSelector,
  (messageState: MessageStateInterface) => messageState.room
);

export const messagesSelector = createSelector(
  messageFeatureSelector,
  (messageState: MessageStateInterface) => messageState.room?.messages
);

export const totalSelector = createSelector(
  messageFeatureSelector,
  (messageState: MessageStateInterface) => messageState.room?.total
);

export const userDataSelector = createSelector(
  messageFeatureSelector,
  (messageState: MessageStateInterface) => messageState.room?.userData
);

export const imageIdSelector = createSelector(
  messageFeatureSelector,
  (messageState: MessageStateInterface) => messageState.imageId
);

export const audioIdSelector = createSelector(
  messageFeatureSelector,
  (messageState: MessageStateInterface) => messageState.audioId
);

export const errorSelector = createSelector(
  messageFeatureSelector,
  (messageState: MessageStateInterface) => messageState.error
);
