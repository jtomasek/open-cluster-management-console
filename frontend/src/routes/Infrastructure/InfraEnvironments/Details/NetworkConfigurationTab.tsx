/* Copyright Contributors to the Open Cluster Management project */
import { AcmPageContent } from '../../../../ui-components'
import { Card, CardBody, PageSection } from '@patternfly/react-core'
import { CIM } from 'openshift-assisted-ui-lib'
import { createResources, deleteResources } from '../../../../resources'
import { NMStateNetworkConfiguration } from 'openshift-assisted-ui-lib/cim'

const { InfraEnvNetworkConfiguration, getNMStateConfig } = CIM

type Props = {
    infraNMStates: CIM.NMStateK8sResource[]
    infraEnv: CIM.InfraEnvK8sResource
}

const NetworkConfigurationTab: React.FC<Props> = ({ infraEnv, infraNMStates }) => {
    const updateNMStateConfigs = async (networkConfigs: NMStateNetworkConfiguration[]) => {
        const newNMStateConfigs = networkConfigs.map((networkConfig) => getNMStateConfig(networkConfig, infraEnv))
        console.log('newNMStateConfigs', newNMStateConfigs)
        await Promise.all([deleteResources(infraNMStates), createResources(newNMStateConfigs)])
    }

    return (
        <AcmPageContent id="network-configuration">
            <PageSection>
                <Card isFullHeight>
                    <CardBody>
                        <InfraEnvNetworkConfiguration
                            updateNMStateConfigs={updateNMStateConfigs}
                            infraEnvNMStateConfigs={infraNMStates}
                        />
                    </CardBody>
                </Card>
            </PageSection>
        </AcmPageContent>
    )
}

export default NetworkConfigurationTab
