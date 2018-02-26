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
                            vmList: [{}]
                        },
                        {
                            hostName: '192.168.24.37',
                            showVM: false,
                            isProvider: true,
                            vmList: [{}]
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
                            vmList: [{}]
                        },
                        {
                            hostName: '172.21.34.156',
                            isProvider: false,
                            showVM: false,
                            vmList: [{}]
                        },
                        {
                            hostName: '198.168.21.44',
                            isProvider: true,
                            showVM: false,
                            vmList: [{}]
                        },
                        {
                            hostName: '192.168.24.37',
                            isProvider: true,
                            showVM: false,
                            vmList: [{}]
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

    public clusterInfo = [
        {
            id: "Cluster 1",
            remoteMemoryContrib: 300,
            remoteMemoryConsuming: 500,
            io_bandwidth: 1024,
            io_reads: 255,
            io_writes: 750
        },
        {
            id: "Cluster 2",
            remoteMemoryContrib: 200,
            remoteMemoryConsuming: 600,
            io_bandwidth: 2048,
            io_reads: 750,
            io_writes: 750
        }
    ]

    public consumerInfo = [
        {
            ip: "172.21.33.21",
            vmInfo: [
                {
                    id: "VM 1",
                    localMemory: "1GB",
                    remoteMemory: "4GB",
                    ratioRemoteMemory: "20%",
                    read: '30%',
                    write: '70%',
                    latency: "700ms",
                    serverDetails: [
                        {
                            ip: 'server1',
                            remoteMemory: '1GB',
                            contribution: '50%',
                            read: '40%',
                            write: '60%',
                            latency: '400ms'
                        },
                        {
                            ip: 'server2',
                            remoteMemory: '3GB',
                            contribution: '50%',
                            read: '50%',
                            write: '50%',
                            latency: '700ms'
                        }
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