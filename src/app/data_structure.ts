export class ClusterInfoType {

    constructor(
        public clusterName: string,
        public consumerNames: string[],
        public memoryConsumed: number,
        public memoryContributed: number,
        public providerNames: string[]) {}
}   