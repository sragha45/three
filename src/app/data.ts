export class Data {
    public clusters = ["Cluster 1", "Cluster 2"];
    public providers = ["198.168.21.44", "192.168.24.37"];
    public consumers = ["172.21.33.21", "172.21.34.156"];


    public sideNavTreeView =
        {
            expanded: false,
            clustersInfo: [
                {
                    clusterName: "Cluster 1",
                    showChild: false,
                    hosts: [
                        {
                            hostName: '172.21.33.21',
                            isProvider: false,
                            showVM: false,
                            vmList: ["vm1", "vm2", "dummy"]
                        },
                        {
                            hostName: '172.21.34.156',
                            showVM: false,
                            isProvider: false,
                            vmList: ["CMC"]
                        },
                        {
                            hostName: '198.168.21.44',
                            showVM: false,
                            isProvider: true,
                            vmList: []
                        },
                        {
                            hostName: '192.168.24.37',
                            showVM: false,
                            isProvider: true,
                            vmList: []
                        }
                    ]

                },
                {
                    clusterName: "Cluster 2",
                    showChild: false,
                    hosts: [
                        {
                            hostName: '172.21.33.21',
                            isProvider: false,
                            showVM: false,
                            vmList: []
                        },
                        {
                            hostName: '172.21.34.156',
                            isProvider: false,
                            showVM: false,
                            vmList: []
                        },
                        {
                            hostName: '198.168.21.44',
                            isProvider: true,
                            showVM: false,
                            vmList: []
                        },
                        {
                            hostName: '192.168.24.37',
                            isProvider: true,
                            showVM: false,
                            vmList: []
                        }
                    ]
                }
            ]
        }


    public providerInfo = [
        {
            ip: "198.168.21.44",
            memAvail: 300,
            memContrib: 200,
            
        },
        {
            ip: "192.168.24.37",
            memAvail: 400,
            memContrib: 100,
            
        }
    ];

    public clusterInfo = [];

    public loadClusterInfo(clusterInfoObj) {
        for(let obj of clusterInfoObj) {
            let clusterobj = {};
            clusterobj['id'] = obj.clusterName;
            clusterobj['remoteMemoryContrib'] = obj.memoryContributed;
            clusterobj['remoteMemoryConsuming'] = obj.memoryConsumed;
            clusterobj['io_reads'] = 255;
            clusterobj['io_writes'] = 750;

            this.clusterInfo.push(clusterobj);
        }
        // console.log(this.clusterInfo);
    }
    // get consumerInfo(): any { return this.consumerInfo; }
    // set consumerInfo(val) { this.consumerInfo = val; }

    public static fillConsumerInfo(ip, vmlist, vmDetails, latencyStats, pmemStatsInfo, providerList) {
        console.log(ip);
        console.log(vmlist);
        console.log(vmDetails);
        console.log(latencyStats);
        console.log(pmemStatsInfo);
        console.log(providerList);

        this.consumerInfoTest['ip'] = ip;
        let vmInfo = {}
        for(let vm of vmlist) {
            vmInfo['id'] = vm;
            vmInfo['read'] = 0
            vmInfo['write'] = 0
            vmInfo['localMemory'] = 0;              // Change this later.
            vmInfo['remoteMemory'] = vmDetails[vm].vmAUsInfo.length * 256 
            vmInfo['latency'] = latencyStats[vm].stats.totalTimeOfFaults + 
                                latencyStats[vm].stats.totalTimeOfSwapOuts;
            
            let serverDetails = {}
            for(let provider of providerList) {
                serverDetails['ip'] = provider.ip;
            }
        }
    }

    public static consumerInfoTest = {}

    public static consumerInfo = [
        {
            ip: "10.107.46.1",
            vmInfo: [
                {
                    id: "vm1",
                    localMemory: "0",
                    remoteMemory: "0",
                    ratioRemoteMemory: "0",
                    read: '0',
                    write: '0',
                    latency: "0",
                    serverDetails: [
                        // {
                        //     ip: 'server1',
                        //     remoteMemory: '1GB',
                        //     contribution: '50%',
                        //     read: '40%',
                        //     write: '60%',
                        //     latency: '400ms'
                        // },
                        // {
                        //     ip: 'server2',
                        //     remoteMemory: '3GB',
                        //     contribution: '50%',
                        //     read: '50%',
                        //     write: '50%',
                        //     latency: '700ms'
                        // }
                    ]
                }
            ]
        },
        {
            ip: "172.21.34.156",
            vmInfo: [
                {
                    id: "VM 2",
                    localMemory: "2GB",
                    remoteMemory: "4GB",
                    ratioRemoteMemory: "30%",
                    read: '60%',
                    write: '40%',
                    latency: "400ms",
                    serverDetails: [
                        {
                            ip: 'server1',
                            remoteMemory: '1GB',
                            contribution: '50%',
                            read: '40%',
                            write: '60%',
                            latency: '700ms'
                        },
                        {
                            ip: 'server2',
                            remoteMemory: '3GB',
                            contribution: '50%',
                            read: '50%',
                            write: '50%',
                            latency: '400ms'
                        }
                    ]
                }
            ]

        }
    ]
}