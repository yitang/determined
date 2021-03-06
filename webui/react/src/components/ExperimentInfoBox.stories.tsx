import React from 'react';

import { CheckpointState, Experiment, ExperimentDetails, RunState } from 'types';
import { generateExperiments } from 'utils/task';

import ExperimentInfoBox from './ExperimentInfoBox';

export default {
  component: ExperimentInfoBox,
  title: 'ExperimentInfoBox',
};

const sampleExperiment: Experiment = generateExperiments(1)[0];

const experimentDetails: ExperimentDetails = {
  ...sampleExperiment,
  trials: [
    {
      bestAvailableCheckpoint: {
        id: 3,
        startTime: Date.now.toString(),
        state: CheckpointState.Completed,
        stepId: 34,
        trialId: 3,
        validationMetric: 0.023,
      },
      hparams: {},
      id: 1,
      numBatches: 3400,
      numSteps: 34,
      state: RunState.Completed,
    },
  ],
  username: 'hamid',
  validationHistory: [ {
    endTime: Date.now().toString(),
    id: 0,
    validationError: 0.023,
  } ],
};

export const state = (): React.ReactNode => (
  <ExperimentInfoBox experiment={experimentDetails} />
);
