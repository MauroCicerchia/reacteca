import Promise from "bluebird";

export default function request<T>(
  url: string,
  config: RequestInit = {}
): Promise<T> {
  return Promise.resolve(fetch(url, config))
    .then((response) => response.json())
    .then((data) => data as T);
}
