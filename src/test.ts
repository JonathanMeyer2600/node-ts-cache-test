import { ExpirationStrategy, MemoryStorage, Cache } from 'node-ts-cache';

const myStrategy = new ExpirationStrategy(new MemoryStorage());

export class SomeTestClass {
    @Cache(myStrategy, { ttl: 60 })
    cacheMe() {}
}