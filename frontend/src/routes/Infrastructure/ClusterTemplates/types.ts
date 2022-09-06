/* Copyright Contributors to the Open Cluster Management project */
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';

export type HelmChartRepository = K8sResourceCommon & {
  spec: {
    connectionConfig: {
      url: string;
      tlsConfig?: { name: string };
      ca?: { name: string };
    };
  };
};

export type ClusterTemplate = K8sResourceCommon & {
  spec: {
    cost: number;
    helmChartRef: {
      name: string;
      version: string;
      repository: string;
    };
    clusterSetup: {
      pipeline: {
        name: string;
        namespace: string;
      };
    };
  };
};

export type ClusterTemplateInstance = K8sResourceCommon & {
  spec: {
    template: string;
  };
};

export type HelmRepoIndex = {
  apiVersion: string;
  entries: {
    [key: string]: {
      name: string;
      version: string;
      created: string;
    }[];
  };
  generated: string;
};

export type ClusterTemplateQuota = K8sResourceCommon & {
  spec: {
    cost: number;
    allowedTemplates: {
      name: string;
      count: number;
    }[];
  };
};
