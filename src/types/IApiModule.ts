import ApiStatus from 'constants/ApiStatus';

interface IApiModule<T> {
    status: ApiStatus;
    error: string | null;
    data: T;
}

export default IApiModule;
