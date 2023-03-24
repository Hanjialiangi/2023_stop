import {ContentType} from '../src/constants';

interface Payload {
    method: string;
    headers: {
      Accept: string;
      [key: string]: string;
    };
    body?: string | FormData;
  }
  function getPayload(
    method: string,
    data: string | FormData,
    contentType: string
  ) {
    const payload: Payload = {
      method,
      headers: {
        Accept: ContentType.JSON,
      }
    };
  
    if (data) {
      if (contentType !== ContentType.FORMDATA) {
        payload.headers['Content-Type'] = contentType;
      }
      payload.body = data;
    }
  
    return payload;
  }
  
  type RequestParams = {
    authorization?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    contentType?: ContentType;
  };
  
  /**
   * HTTP请求
   * @param path 请求地址
   * @param data 请求体
   * @param authorization Authorization头
   * @param method 请求方法
   * @param contentType 请求体类型
   * @param reLoginOnAuthFailure
   */
  async function request<T>(
    path: string,
    data: string | FormData = '',
    {method, contentType }: RequestParams = {
      method: 'GET',
      contentType: ContentType.JSON
    }
  ): Promise<T> {
    if (!method) {
      method = 'GET';
    }
    if (!contentType) {
      contentType = ContentType.JSON;
    }
  
    //process.env.API_PREFIX +
    const fullPath =  path;
  
    const response = await fetch(
      fullPath,
      getPayload(method, data, contentType)
    );
  
  
    return response.json();
  }
  
  export type ResponseData<T> = {
    code: number;
    data: T;
    message: string;
  };
  export type APIResponse<T> = Promise<ResponseData<T>>;
  export type Pagination<T> = {
    current_page: number;
    data: T[];
    per_page: number;
    total: number;
  };
  

  /**
   * 调用随即头像
   */
  export function getRandomImg():Promise<{code:string;data:{url:string};}>
  {
    return request('/api/DmImgS','',{method:'GET'});
  }

  /**
   * 
   */
  export function getText():Promise<{content:string;origin:string;author:string;category:string}>
  {
    return request('/bpi/all.json','',{method:'GET'});
  }