
/**
 * 用户信息
 */
export interface UserInfo {
    username: string;
    password: string;
}

/**
 * token信息
 */
export interface Token {
    tokenString: string;
}

/**
 * 工作空间
 */
export interface Namespace {
    name: string;
    status: string;
    createTime: string;
}

/**
 * Node节点信息
 */
export interface NodeInfo {
    name: string;
    status: string;
    labels: {
        [key: string]: string
    };
    createTime: string;
    podCIDRS: string;
    unschdulable: boolean;
    taints: null|Taint[];
    Addresses: Address[];
}
/**
 * Taint
 */
interface Taint{
    key: string;
    effect: string;
    timeAdded: string;
}
/**
 * Address
 */
type Address = {
    type: string;
    address: string;
}

/**
 * POD 信息
 */
export interface Pod{
    podName:string;
    status:string;
    podIP: string;
    nodeName:string;
    createTime:string;
    restartCount: number;
    namespace: string;
    containers: Container[];
}
/**
 * 容器信息
 */
type Container = {
    name: string;
    ready: boolean;
    status: {
        [key: string]: {
            [key:string]: string
        }
    };
    restartCount: number;
    image: string;
}
/**
 * Service信息
 */
export interface Service {
    name: string;
    type: string;
    clusterIP: string|null;
    externalIP: string|null;
    ports: string|null;
    namespace: string|null;
    selector: string[];
}
/**
 * Deployment
 */
export interface Deployment {
    name: string;
    readyReplicas: number;
    replicas: number;
    availableReplicas: number;
    selector: string[];
    createTime: string;
    namespace: string;
    labels: string|null;
}


