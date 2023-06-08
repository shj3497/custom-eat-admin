import {AxiosError} from 'axios';
import {UseMutationOptions, UseQueryOptions} from 'react-query';
//? TData: API 성공했을때의 결과 required
//? TError: API 실패했을때의 결과 정의하지 않을경우 unknown으로 선언
//? Variable: API에 같이 날리는 값들 required
/**
 * @TData API 성공했을때의 결과 (required)
 * @TError API 실패했을때의 결과 정의하지 않을경우 unknown으로 선언
 * @Variable API에 같이 날리는 값들 (required)
 */
export type MutationOption<TData, TError, Variable> = Omit<
  UseMutationOptions<TData, TError, Variable>,
  'mutationKey' | 'mutationFn'
>;

/**
 * @TQueryFnData API 성공했을때의 결과 (required)
 * @TError API 실패했을때의 결과 정의하지 않을경우 unknown으로 선언
 */
export type QueryOption<TQueryFnData, TError> = Omit<
  UseQueryOptions<TQueryFnData, TError, TQueryFnData, string[]>,
  'queryKey' | 'queryFn'
>;
