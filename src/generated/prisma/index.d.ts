
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Accounts
 * 
 */
export type Accounts = $Result.DefaultSelection<Prisma.$AccountsPayload>
/**
 * Model Employees
 * 
 */
export type Employees = $Result.DefaultSelection<Prisma.$EmployeesPayload>
/**
 * Model Passwords
 * 
 */
export type Passwords = $Result.DefaultSelection<Prisma.$PasswordsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.accounts`: Exposes CRUD operations for the **Accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.AccountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **Employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.EmployeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwords`: Exposes CRUD operations for the **Passwords** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passwords
    * const passwords = await prisma.passwords.findMany()
    * ```
    */
  get passwords(): Prisma.PasswordsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Accounts: 'Accounts',
    Employees: 'Employees',
    Passwords: 'Passwords'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "accounts" | "employees" | "passwords"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Accounts: {
        payload: Prisma.$AccountsPayload<ExtArgs>
        fields: Prisma.AccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findFirst: {
            args: Prisma.AccountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          findMany: {
            args: Prisma.AccountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          create: {
            args: Prisma.AccountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          createMany: {
            args: Prisma.AccountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          delete: {
            args: Prisma.AccountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          update: {
            args: Prisma.AccountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          deleteMany: {
            args: Prisma.AccountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>[]
          }
          upsert: {
            args: Prisma.AccountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.AccountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      Employees: {
        payload: Prisma.$EmployeesPayload<ExtArgs>
        fields: Prisma.EmployeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findFirst: {
            args: Prisma.EmployeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findMany: {
            args: Prisma.EmployeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          create: {
            args: Prisma.EmployeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          createMany: {
            args: Prisma.EmployeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          delete: {
            args: Prisma.EmployeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          update: {
            args: Prisma.EmployeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          deleteMany: {
            args: Prisma.EmployeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          upsert: {
            args: Prisma.EmployeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.EmployeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      Passwords: {
        payload: Prisma.$PasswordsPayload<ExtArgs>
        fields: Prisma.PasswordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload>
          }
          findFirst: {
            args: Prisma.PasswordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload>
          }
          findMany: {
            args: Prisma.PasswordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload>[]
          }
          create: {
            args: Prisma.PasswordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload>
          }
          createMany: {
            args: Prisma.PasswordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload>[]
          }
          delete: {
            args: Prisma.PasswordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload>
          }
          update: {
            args: Prisma.PasswordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload>
          }
          deleteMany: {
            args: Prisma.PasswordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload>[]
          }
          upsert: {
            args: Prisma.PasswordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordsPayload>
          }
          aggregate: {
            args: Prisma.PasswordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswords>
          }
          groupBy: {
            args: Prisma.PasswordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordsCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    accounts?: AccountsOmit
    employees?: EmployeesOmit
    passwords?: PasswordsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    iAccountID: number | null
    iEmployeeID: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type AccountsSumAggregateOutputType = {
    iAccountID: number | null
    iEmployeeID: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type AccountsMinAggregateOutputType = {
    iAccountID: number | null
    iEmployeeID: number | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    iAccountID: number | null
    iEmployeeID: number | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    iAccountID: number
    iEmployeeID: number
    iStatus: number
    iCreateBy: number
    dtCreateAt: number
    iModifyBy: number
    dtModifyAt: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    iAccountID?: true
    iEmployeeID?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type AccountsSumAggregateInputType = {
    iAccountID?: true
    iEmployeeID?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type AccountsMinAggregateInputType = {
    iAccountID?: true
    iEmployeeID?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
  }

  export type AccountsMaxAggregateInputType = {
    iAccountID?: true
    iEmployeeID?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
  }

  export type AccountsCountAggregateInputType = {
    iAccountID?: true
    iEmployeeID?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to aggregate.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type AccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountsWhereInput
    orderBy?: AccountsOrderByWithAggregationInput | AccountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: AccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    iAccountID: number
    iEmployeeID: number
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends AccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type AccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iAccountID?: boolean
    iEmployeeID?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
    Passwords?: boolean | Accounts$PasswordsArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iAccountID?: boolean
    iEmployeeID?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iAccountID?: boolean
    iEmployeeID?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type AccountsSelectScalar = {
    iAccountID?: boolean
    iEmployeeID?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
  }

  export type AccountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"iAccountID" | "iEmployeeID" | "iStatus" | "iCreateBy" | "dtCreateAt" | "iModifyBy" | "dtModifyAt", ExtArgs["result"]["accounts"]>
  export type AccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
    Passwords?: boolean | Accounts$PasswordsArgs<ExtArgs>
  }
  export type AccountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
  }
  export type AccountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employees?: boolean | EmployeesDefaultArgs<ExtArgs>
  }

  export type $AccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accounts"
    objects: {
      Employees: Prisma.$EmployeesPayload<ExtArgs>
      Passwords: Prisma.$PasswordsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      iAccountID: number
      iEmployeeID: number
      iStatus: number | null
      iCreateBy: number | null
      dtCreateAt: Date | null
      iModifyBy: number | null
      dtModifyAt: Date | null
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type AccountsGetPayload<S extends boolean | null | undefined | AccountsDefaultArgs> = $Result.GetResult<Prisma.$AccountsPayload, S>

  type AccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface AccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accounts'], meta: { name: 'Accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {AccountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountsFindUniqueArgs>(args: SelectSubset<T, AccountsFindUniqueArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountsFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountsFindFirstArgs>(args?: SelectSubset<T, AccountsFindFirstArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountsFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `iAccountID`
     * const accountsWithIAccountIDOnly = await prisma.accounts.findMany({ select: { iAccountID: true } })
     * 
     */
    findMany<T extends AccountsFindManyArgs>(args?: SelectSubset<T, AccountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {AccountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends AccountsCreateArgs>(args: SelectSubset<T, AccountsCreateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountsCreateManyArgs>(args?: SelectSubset<T, AccountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `iAccountID`
     * const accountsWithIAccountIDOnly = await prisma.accounts.createManyAndReturn({
     *   select: { iAccountID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountsCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accounts.
     * @param {AccountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends AccountsDeleteArgs>(args: SelectSubset<T, AccountsDeleteArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {AccountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountsUpdateArgs>(args: SelectSubset<T, AccountsUpdateArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountsDeleteManyArgs>(args?: SelectSubset<T, AccountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountsUpdateManyArgs>(args: SelectSubset<T, AccountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `iAccountID`
     * const accountsWithIAccountIDOnly = await prisma.accounts.updateManyAndReturn({
     *   select: { iAccountID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountsUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accounts.
     * @param {AccountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends AccountsUpsertArgs>(args: SelectSubset<T, AccountsUpsertArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountsCountArgs>(
      args?: Subset<T, AccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountsGroupByArgs['orderBy'] }
        : { orderBy?: AccountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accounts model
   */
  readonly fields: AccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employees<T extends EmployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeesDefaultArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Passwords<T extends Accounts$PasswordsArgs<ExtArgs> = {}>(args?: Subset<T, Accounts$PasswordsArgs<ExtArgs>>): Prisma__PasswordsClient<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Accounts model
   */
  interface AccountsFieldRefs {
    readonly iAccountID: FieldRef<"Accounts", 'Int'>
    readonly iEmployeeID: FieldRef<"Accounts", 'Int'>
    readonly iStatus: FieldRef<"Accounts", 'Int'>
    readonly iCreateBy: FieldRef<"Accounts", 'Int'>
    readonly dtCreateAt: FieldRef<"Accounts", 'DateTime'>
    readonly iModifyBy: FieldRef<"Accounts", 'Int'>
    readonly dtModifyAt: FieldRef<"Accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Accounts findUnique
   */
  export type AccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findUniqueOrThrow
   */
  export type AccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts findFirst
   */
  export type AccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findFirstOrThrow
   */
  export type AccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts findMany
   */
  export type AccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountsOrderByWithRelationInput | AccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * Accounts create
   */
  export type AccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to create a Accounts.
     */
    data: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
  }

  /**
   * Accounts createMany
   */
  export type AccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accounts createManyAndReturn
   */
  export type AccountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountsCreateManyInput | AccountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accounts update
   */
  export type AccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The data needed to update a Accounts.
     */
    data: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
    /**
     * Choose, which Accounts to update.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts updateMany
   */
  export type AccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Accounts updateManyAndReturn
   */
  export type AccountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountsUpdateManyMutationInput, AccountsUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accounts upsert
   */
  export type AccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * The filter to search for the Accounts to update in case it exists.
     */
    where: AccountsWhereUniqueInput
    /**
     * In case the Accounts found by the `where` argument doesn't exist, create a new Accounts with this data.
     */
    create: XOR<AccountsCreateInput, AccountsUncheckedCreateInput>
    /**
     * In case the Accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountsUpdateInput, AccountsUncheckedUpdateInput>
  }

  /**
   * Accounts delete
   */
  export type AccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    /**
     * Filter which Accounts to delete.
     */
    where: AccountsWhereUniqueInput
  }

  /**
   * Accounts deleteMany
   */
  export type AccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountsWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Accounts.Passwords
   */
  export type Accounts$PasswordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
    where?: PasswordsWhereInput
  }

  /**
   * Accounts without action
   */
  export type AccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
  }


  /**
   * Model Employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    iEmployeeID: number | null
    iSafetyYet: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type EmployeesSumAggregateOutputType = {
    iEmployeeID: number | null
    iSafetyYet: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type EmployeesMinAggregateOutputType = {
    iEmployeeID: number | null
    sEmpID: string | null
    sFullName: string | null
    sEmail: string | null
    sDepartment: string | null
    sRole: string | null
    dtHireDate: Date | null
    iSafetyYet: number | null
    dtLastSafetyTraining: Date | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
  }

  export type EmployeesMaxAggregateOutputType = {
    iEmployeeID: number | null
    sEmpID: string | null
    sFullName: string | null
    sEmail: string | null
    sDepartment: string | null
    sRole: string | null
    dtHireDate: Date | null
    iSafetyYet: number | null
    dtLastSafetyTraining: Date | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
  }

  export type EmployeesCountAggregateOutputType = {
    iEmployeeID: number
    sEmpID: number
    sFullName: number
    sEmail: number
    sDepartment: number
    sRole: number
    dtHireDate: number
    iSafetyYet: number
    dtLastSafetyTraining: number
    iStatus: number
    iCreateBy: number
    dtCreateAt: number
    iModifyBy: number
    dtModifyAt: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    iEmployeeID?: true
    iSafetyYet?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type EmployeesSumAggregateInputType = {
    iEmployeeID?: true
    iSafetyYet?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type EmployeesMinAggregateInputType = {
    iEmployeeID?: true
    sEmpID?: true
    sFullName?: true
    sEmail?: true
    sDepartment?: true
    sRole?: true
    dtHireDate?: true
    iSafetyYet?: true
    dtLastSafetyTraining?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
  }

  export type EmployeesMaxAggregateInputType = {
    iEmployeeID?: true
    sEmpID?: true
    sFullName?: true
    sEmail?: true
    sDepartment?: true
    sRole?: true
    dtHireDate?: true
    iSafetyYet?: true
    dtLastSafetyTraining?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
  }

  export type EmployeesCountAggregateInputType = {
    iEmployeeID?: true
    sEmpID?: true
    sFullName?: true
    sEmail?: true
    sDepartment?: true
    sRole?: true
    dtHireDate?: true
    iSafetyYet?: true
    dtLastSafetyTraining?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to aggregate.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type EmployeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithAggregationInput | EmployeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: EmployeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    iEmployeeID: number
    sEmpID: string
    sFullName: string
    sEmail: string | null
    sDepartment: string | null
    sRole: string | null
    dtHireDate: Date | null
    iSafetyYet: number | null
    dtLastSafetyTraining: Date | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends EmployeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iEmployeeID?: boolean
    sEmpID?: boolean
    sFullName?: boolean
    sEmail?: boolean
    sDepartment?: boolean
    sRole?: boolean
    dtHireDate?: boolean
    iSafetyYet?: boolean
    dtLastSafetyTraining?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    Accounts?: boolean | Employees$AccountsArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iEmployeeID?: boolean
    sEmpID?: boolean
    sFullName?: boolean
    sEmail?: boolean
    sDepartment?: boolean
    sRole?: boolean
    dtHireDate?: boolean
    iSafetyYet?: boolean
    dtLastSafetyTraining?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iEmployeeID?: boolean
    sEmpID?: boolean
    sFullName?: boolean
    sEmail?: boolean
    sDepartment?: boolean
    sRole?: boolean
    dtHireDate?: boolean
    iSafetyYet?: boolean
    dtLastSafetyTraining?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectScalar = {
    iEmployeeID?: boolean
    sEmpID?: boolean
    sFullName?: boolean
    sEmail?: boolean
    sDepartment?: boolean
    sRole?: boolean
    dtHireDate?: boolean
    iSafetyYet?: boolean
    dtLastSafetyTraining?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
  }

  export type EmployeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"iEmployeeID" | "sEmpID" | "sFullName" | "sEmail" | "sDepartment" | "sRole" | "dtHireDate" | "iSafetyYet" | "dtLastSafetyTraining" | "iStatus" | "iCreateBy" | "dtCreateAt" | "iModifyBy" | "dtModifyAt", ExtArgs["result"]["employees"]>
  export type EmployeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | Employees$AccountsArgs<ExtArgs>
  }
  export type EmployeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employees"
    objects: {
      Accounts: Prisma.$AccountsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      iEmployeeID: number
      sEmpID: string
      sFullName: string
      sEmail: string | null
      sDepartment: string | null
      sRole: string | null
      dtHireDate: Date | null
      iSafetyYet: number | null
      dtLastSafetyTraining: Date | null
      iStatus: number | null
      iCreateBy: number | null
      dtCreateAt: Date | null
      iModifyBy: number | null
      dtModifyAt: Date | null
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type EmployeesGetPayload<S extends boolean | null | undefined | EmployeesDefaultArgs> = $Result.GetResult<Prisma.$EmployeesPayload, S>

  type EmployeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface EmployeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employees'], meta: { name: 'Employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {EmployeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeesFindUniqueArgs>(args: SelectSubset<T, EmployeesFindUniqueArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeesFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeesFindFirstArgs>(args?: SelectSubset<T, EmployeesFindFirstArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeesFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `iEmployeeID`
     * const employeesWithIEmployeeIDOnly = await prisma.employees.findMany({ select: { iEmployeeID: true } })
     * 
     */
    findMany<T extends EmployeesFindManyArgs>(args?: SelectSubset<T, EmployeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {EmployeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends EmployeesCreateArgs>(args: SelectSubset<T, EmployeesCreateArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeesCreateManyArgs>(args?: SelectSubset<T, EmployeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeesCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `iEmployeeID`
     * const employeesWithIEmployeeIDOnly = await prisma.employees.createManyAndReturn({
     *   select: { iEmployeeID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeesCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employees.
     * @param {EmployeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends EmployeesDeleteArgs>(args: SelectSubset<T, EmployeesDeleteArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {EmployeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeesUpdateArgs>(args: SelectSubset<T, EmployeesUpdateArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeesDeleteManyArgs>(args?: SelectSubset<T, EmployeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeesUpdateManyArgs>(args: SelectSubset<T, EmployeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeesUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `iEmployeeID`
     * const employeesWithIEmployeeIDOnly = await prisma.employees.updateManyAndReturn({
     *   select: { iEmployeeID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeesUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employees.
     * @param {EmployeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends EmployeesUpsertArgs>(args: SelectSubset<T, EmployeesUpsertArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeesCountArgs>(
      args?: Subset<T, EmployeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employees model
   */
  readonly fields: EmployeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Accounts<T extends Employees$AccountsArgs<ExtArgs> = {}>(args?: Subset<T, Employees$AccountsArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employees model
   */
  interface EmployeesFieldRefs {
    readonly iEmployeeID: FieldRef<"Employees", 'Int'>
    readonly sEmpID: FieldRef<"Employees", 'String'>
    readonly sFullName: FieldRef<"Employees", 'String'>
    readonly sEmail: FieldRef<"Employees", 'String'>
    readonly sDepartment: FieldRef<"Employees", 'String'>
    readonly sRole: FieldRef<"Employees", 'String'>
    readonly dtHireDate: FieldRef<"Employees", 'DateTime'>
    readonly iSafetyYet: FieldRef<"Employees", 'Int'>
    readonly dtLastSafetyTraining: FieldRef<"Employees", 'DateTime'>
    readonly iStatus: FieldRef<"Employees", 'Int'>
    readonly iCreateBy: FieldRef<"Employees", 'Int'>
    readonly dtCreateAt: FieldRef<"Employees", 'DateTime'>
    readonly iModifyBy: FieldRef<"Employees", 'Int'>
    readonly dtModifyAt: FieldRef<"Employees", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employees findUnique
   */
  export type EmployeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees findUniqueOrThrow
   */
  export type EmployeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees findFirst
   */
  export type EmployeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees findFirstOrThrow
   */
  export type EmployeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees findMany
   */
  export type EmployeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees create
   */
  export type EmployeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to create a Employees.
     */
    data: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
  }

  /**
   * Employees createMany
   */
  export type EmployeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employees createManyAndReturn
   */
  export type EmployeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employees update
   */
  export type EmployeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to update a Employees.
     */
    data: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
    /**
     * Choose, which Employees to update.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees updateMany
   */
  export type EmployeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employees updateManyAndReturn
   */
  export type EmployeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employees upsert
   */
  export type EmployeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The filter to search for the Employees to update in case it exists.
     */
    where: EmployeesWhereUniqueInput
    /**
     * In case the Employees found by the `where` argument doesn't exist, create a new Employees with this data.
     */
    create: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
    /**
     * In case the Employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
  }

  /**
   * Employees delete
   */
  export type EmployeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter which Employees to delete.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees deleteMany
   */
  export type EmployeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employees.Accounts
   */
  export type Employees$AccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accounts
     */
    select?: AccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accounts
     */
    omit?: AccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountsInclude<ExtArgs> | null
    where?: AccountsWhereInput
  }

  /**
   * Employees without action
   */
  export type EmployeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
  }


  /**
   * Model Passwords
   */

  export type AggregatePasswords = {
    _count: PasswordsCountAggregateOutputType | null
    _avg: PasswordsAvgAggregateOutputType | null
    _sum: PasswordsSumAggregateOutputType | null
    _min: PasswordsMinAggregateOutputType | null
    _max: PasswordsMaxAggregateOutputType | null
  }

  export type PasswordsAvgAggregateOutputType = {
    iPasswordID: number | null
    iAccountID: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type PasswordsSumAggregateOutputType = {
    iPasswordID: number | null
    iAccountID: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type PasswordsMinAggregateOutputType = {
    iPasswordID: number | null
    iAccountID: number | null
    sPassword: string | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
  }

  export type PasswordsMaxAggregateOutputType = {
    iPasswordID: number | null
    iAccountID: number | null
    sPassword: string | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
  }

  export type PasswordsCountAggregateOutputType = {
    iPasswordID: number
    iAccountID: number
    sPassword: number
    iStatus: number
    iCreateBy: number
    dtCreateAt: number
    iModifyBy: number
    dtModifyAt: number
    _all: number
  }


  export type PasswordsAvgAggregateInputType = {
    iPasswordID?: true
    iAccountID?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type PasswordsSumAggregateInputType = {
    iPasswordID?: true
    iAccountID?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type PasswordsMinAggregateInputType = {
    iPasswordID?: true
    iAccountID?: true
    sPassword?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
  }

  export type PasswordsMaxAggregateInputType = {
    iPasswordID?: true
    iAccountID?: true
    sPassword?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
  }

  export type PasswordsCountAggregateInputType = {
    iPasswordID?: true
    iAccountID?: true
    sPassword?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
    _all?: true
  }

  export type PasswordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passwords to aggregate.
     */
    where?: PasswordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordsOrderByWithRelationInput | PasswordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passwords
    **/
    _count?: true | PasswordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordsMaxAggregateInputType
  }

  export type GetPasswordsAggregateType<T extends PasswordsAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswords[P]>
      : GetScalarType<T[P], AggregatePasswords[P]>
  }




  export type PasswordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordsWhereInput
    orderBy?: PasswordsOrderByWithAggregationInput | PasswordsOrderByWithAggregationInput[]
    by: PasswordsScalarFieldEnum[] | PasswordsScalarFieldEnum
    having?: PasswordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordsCountAggregateInputType | true
    _avg?: PasswordsAvgAggregateInputType
    _sum?: PasswordsSumAggregateInputType
    _min?: PasswordsMinAggregateInputType
    _max?: PasswordsMaxAggregateInputType
  }

  export type PasswordsGroupByOutputType = {
    iPasswordID: number
    iAccountID: number
    sPassword: string
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
    _count: PasswordsCountAggregateOutputType | null
    _avg: PasswordsAvgAggregateOutputType | null
    _sum: PasswordsSumAggregateOutputType | null
    _min: PasswordsMinAggregateOutputType | null
    _max: PasswordsMaxAggregateOutputType | null
  }

  type GetPasswordsGroupByPayload<T extends PasswordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordsGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordsGroupByOutputType[P]>
        }
      >
    >


  export type PasswordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iPasswordID?: boolean
    iAccountID?: boolean
    sPassword?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwords"]>

  export type PasswordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iPasswordID?: boolean
    iAccountID?: boolean
    sPassword?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwords"]>

  export type PasswordsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iPasswordID?: boolean
    iAccountID?: boolean
    sPassword?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwords"]>

  export type PasswordsSelectScalar = {
    iPasswordID?: boolean
    iAccountID?: boolean
    sPassword?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
  }

  export type PasswordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"iPasswordID" | "iAccountID" | "sPassword" | "iStatus" | "iCreateBy" | "dtCreateAt" | "iModifyBy" | "dtModifyAt", ExtArgs["result"]["passwords"]>
  export type PasswordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type PasswordsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }
  export type PasswordsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Accounts?: boolean | AccountsDefaultArgs<ExtArgs>
  }

  export type $PasswordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passwords"
    objects: {
      Accounts: Prisma.$AccountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      iPasswordID: number
      iAccountID: number
      sPassword: string
      iStatus: number | null
      iCreateBy: number | null
      dtCreateAt: Date | null
      iModifyBy: number | null
      dtModifyAt: Date | null
    }, ExtArgs["result"]["passwords"]>
    composites: {}
  }

  type PasswordsGetPayload<S extends boolean | null | undefined | PasswordsDefaultArgs> = $Result.GetResult<Prisma.$PasswordsPayload, S>

  type PasswordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordsCountAggregateInputType | true
    }

  export interface PasswordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passwords'], meta: { name: 'Passwords' } }
    /**
     * Find zero or one Passwords that matches the filter.
     * @param {PasswordsFindUniqueArgs} args - Arguments to find a Passwords
     * @example
     * // Get one Passwords
     * const passwords = await prisma.passwords.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordsFindUniqueArgs>(args: SelectSubset<T, PasswordsFindUniqueArgs<ExtArgs>>): Prisma__PasswordsClient<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passwords that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordsFindUniqueOrThrowArgs} args - Arguments to find a Passwords
     * @example
     * // Get one Passwords
     * const passwords = await prisma.passwords.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordsFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordsClient<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordsFindFirstArgs} args - Arguments to find a Passwords
     * @example
     * // Get one Passwords
     * const passwords = await prisma.passwords.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordsFindFirstArgs>(args?: SelectSubset<T, PasswordsFindFirstArgs<ExtArgs>>): Prisma__PasswordsClient<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passwords that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordsFindFirstOrThrowArgs} args - Arguments to find a Passwords
     * @example
     * // Get one Passwords
     * const passwords = await prisma.passwords.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordsFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordsClient<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passwords
     * const passwords = await prisma.passwords.findMany()
     * 
     * // Get first 10 Passwords
     * const passwords = await prisma.passwords.findMany({ take: 10 })
     * 
     * // Only select the `iPasswordID`
     * const passwordsWithIPasswordIDOnly = await prisma.passwords.findMany({ select: { iPasswordID: true } })
     * 
     */
    findMany<T extends PasswordsFindManyArgs>(args?: SelectSubset<T, PasswordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passwords.
     * @param {PasswordsCreateArgs} args - Arguments to create a Passwords.
     * @example
     * // Create one Passwords
     * const Passwords = await prisma.passwords.create({
     *   data: {
     *     // ... data to create a Passwords
     *   }
     * })
     * 
     */
    create<T extends PasswordsCreateArgs>(args: SelectSubset<T, PasswordsCreateArgs<ExtArgs>>): Prisma__PasswordsClient<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passwords.
     * @param {PasswordsCreateManyArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const passwords = await prisma.passwords.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordsCreateManyArgs>(args?: SelectSubset<T, PasswordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passwords and returns the data saved in the database.
     * @param {PasswordsCreateManyAndReturnArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const passwords = await prisma.passwords.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passwords and only return the `iPasswordID`
     * const passwordsWithIPasswordIDOnly = await prisma.passwords.createManyAndReturn({
     *   select: { iPasswordID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordsCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passwords.
     * @param {PasswordsDeleteArgs} args - Arguments to delete one Passwords.
     * @example
     * // Delete one Passwords
     * const Passwords = await prisma.passwords.delete({
     *   where: {
     *     // ... filter to delete one Passwords
     *   }
     * })
     * 
     */
    delete<T extends PasswordsDeleteArgs>(args: SelectSubset<T, PasswordsDeleteArgs<ExtArgs>>): Prisma__PasswordsClient<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passwords.
     * @param {PasswordsUpdateArgs} args - Arguments to update one Passwords.
     * @example
     * // Update one Passwords
     * const passwords = await prisma.passwords.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordsUpdateArgs>(args: SelectSubset<T, PasswordsUpdateArgs<ExtArgs>>): Prisma__PasswordsClient<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passwords.
     * @param {PasswordsDeleteManyArgs} args - Arguments to filter Passwords to delete.
     * @example
     * // Delete a few Passwords
     * const { count } = await prisma.passwords.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordsDeleteManyArgs>(args?: SelectSubset<T, PasswordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passwords
     * const passwords = await prisma.passwords.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordsUpdateManyArgs>(args: SelectSubset<T, PasswordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords and returns the data updated in the database.
     * @param {PasswordsUpdateManyAndReturnArgs} args - Arguments to update many Passwords.
     * @example
     * // Update many Passwords
     * const passwords = await prisma.passwords.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passwords and only return the `iPasswordID`
     * const passwordsWithIPasswordIDOnly = await prisma.passwords.updateManyAndReturn({
     *   select: { iPasswordID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordsUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passwords.
     * @param {PasswordsUpsertArgs} args - Arguments to update or create a Passwords.
     * @example
     * // Update or create a Passwords
     * const passwords = await prisma.passwords.upsert({
     *   create: {
     *     // ... data to create a Passwords
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passwords we want to update
     *   }
     * })
     */
    upsert<T extends PasswordsUpsertArgs>(args: SelectSubset<T, PasswordsUpsertArgs<ExtArgs>>): Prisma__PasswordsClient<$Result.GetResult<Prisma.$PasswordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordsCountArgs} args - Arguments to filter Passwords to count.
     * @example
     * // Count the number of Passwords
     * const count = await prisma.passwords.count({
     *   where: {
     *     // ... the filter for the Passwords we want to count
     *   }
     * })
    **/
    count<T extends PasswordsCountArgs>(
      args?: Subset<T, PasswordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordsAggregateArgs>(args: Subset<T, PasswordsAggregateArgs>): Prisma.PrismaPromise<GetPasswordsAggregateType<T>>

    /**
     * Group by Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordsGroupByArgs['orderBy'] }
        : { orderBy?: PasswordsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passwords model
   */
  readonly fields: PasswordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passwords.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Accounts<T extends AccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountsDefaultArgs<ExtArgs>>): Prisma__AccountsClient<$Result.GetResult<Prisma.$AccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Passwords model
   */
  interface PasswordsFieldRefs {
    readonly iPasswordID: FieldRef<"Passwords", 'Int'>
    readonly iAccountID: FieldRef<"Passwords", 'Int'>
    readonly sPassword: FieldRef<"Passwords", 'String'>
    readonly iStatus: FieldRef<"Passwords", 'Int'>
    readonly iCreateBy: FieldRef<"Passwords", 'Int'>
    readonly dtCreateAt: FieldRef<"Passwords", 'DateTime'>
    readonly iModifyBy: FieldRef<"Passwords", 'Int'>
    readonly dtModifyAt: FieldRef<"Passwords", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Passwords findUnique
   */
  export type PasswordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
    /**
     * Filter, which Passwords to fetch.
     */
    where: PasswordsWhereUniqueInput
  }

  /**
   * Passwords findUniqueOrThrow
   */
  export type PasswordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
    /**
     * Filter, which Passwords to fetch.
     */
    where: PasswordsWhereUniqueInput
  }

  /**
   * Passwords findFirst
   */
  export type PasswordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
    /**
     * Filter, which Passwords to fetch.
     */
    where?: PasswordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordsOrderByWithRelationInput | PasswordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passwords.
     */
    cursor?: PasswordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passwords.
     */
    distinct?: PasswordsScalarFieldEnum | PasswordsScalarFieldEnum[]
  }

  /**
   * Passwords findFirstOrThrow
   */
  export type PasswordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
    /**
     * Filter, which Passwords to fetch.
     */
    where?: PasswordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordsOrderByWithRelationInput | PasswordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passwords.
     */
    cursor?: PasswordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passwords.
     */
    distinct?: PasswordsScalarFieldEnum | PasswordsScalarFieldEnum[]
  }

  /**
   * Passwords findMany
   */
  export type PasswordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
    /**
     * Filter, which Passwords to fetch.
     */
    where?: PasswordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordsOrderByWithRelationInput | PasswordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passwords.
     */
    cursor?: PasswordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passwords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passwords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passwords.
     */
    distinct?: PasswordsScalarFieldEnum | PasswordsScalarFieldEnum[]
  }

  /**
   * Passwords create
   */
  export type PasswordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
    /**
     * The data needed to create a Passwords.
     */
    data: XOR<PasswordsCreateInput, PasswordsUncheckedCreateInput>
  }

  /**
   * Passwords createMany
   */
  export type PasswordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passwords.
     */
    data: PasswordsCreateManyInput | PasswordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passwords createManyAndReturn
   */
  export type PasswordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * The data used to create many Passwords.
     */
    data: PasswordsCreateManyInput | PasswordsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passwords update
   */
  export type PasswordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
    /**
     * The data needed to update a Passwords.
     */
    data: XOR<PasswordsUpdateInput, PasswordsUncheckedUpdateInput>
    /**
     * Choose, which Passwords to update.
     */
    where: PasswordsWhereUniqueInput
  }

  /**
   * Passwords updateMany
   */
  export type PasswordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passwords.
     */
    data: XOR<PasswordsUpdateManyMutationInput, PasswordsUncheckedUpdateManyInput>
    /**
     * Filter which Passwords to update
     */
    where?: PasswordsWhereInput
    /**
     * Limit how many Passwords to update.
     */
    limit?: number
  }

  /**
   * Passwords updateManyAndReturn
   */
  export type PasswordsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * The data used to update Passwords.
     */
    data: XOR<PasswordsUpdateManyMutationInput, PasswordsUncheckedUpdateManyInput>
    /**
     * Filter which Passwords to update
     */
    where?: PasswordsWhereInput
    /**
     * Limit how many Passwords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passwords upsert
   */
  export type PasswordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
    /**
     * The filter to search for the Passwords to update in case it exists.
     */
    where: PasswordsWhereUniqueInput
    /**
     * In case the Passwords found by the `where` argument doesn't exist, create a new Passwords with this data.
     */
    create: XOR<PasswordsCreateInput, PasswordsUncheckedCreateInput>
    /**
     * In case the Passwords was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordsUpdateInput, PasswordsUncheckedUpdateInput>
  }

  /**
   * Passwords delete
   */
  export type PasswordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
    /**
     * Filter which Passwords to delete.
     */
    where: PasswordsWhereUniqueInput
  }

  /**
   * Passwords deleteMany
   */
  export type PasswordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passwords to delete
     */
    where?: PasswordsWhereInput
    /**
     * Limit how many Passwords to delete.
     */
    limit?: number
  }

  /**
   * Passwords without action
   */
  export type PasswordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passwords
     */
    select?: PasswordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passwords
     */
    omit?: PasswordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountsScalarFieldEnum: {
    iAccountID: 'iAccountID',
    iEmployeeID: 'iEmployeeID',
    iStatus: 'iStatus',
    iCreateBy: 'iCreateBy',
    dtCreateAt: 'dtCreateAt',
    iModifyBy: 'iModifyBy',
    dtModifyAt: 'dtModifyAt'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    iEmployeeID: 'iEmployeeID',
    sEmpID: 'sEmpID',
    sFullName: 'sFullName',
    sEmail: 'sEmail',
    sDepartment: 'sDepartment',
    sRole: 'sRole',
    dtHireDate: 'dtHireDate',
    iSafetyYet: 'iSafetyYet',
    dtLastSafetyTraining: 'dtLastSafetyTraining',
    iStatus: 'iStatus',
    iCreateBy: 'iCreateBy',
    dtCreateAt: 'dtCreateAt',
    iModifyBy: 'iModifyBy',
    dtModifyAt: 'dtModifyAt'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const PasswordsScalarFieldEnum: {
    iPasswordID: 'iPasswordID',
    iAccountID: 'iAccountID',
    sPassword: 'sPassword',
    iStatus: 'iStatus',
    iCreateBy: 'iCreateBy',
    dtCreateAt: 'dtCreateAt',
    iModifyBy: 'iModifyBy',
    dtModifyAt: 'dtModifyAt'
  };

  export type PasswordsScalarFieldEnum = (typeof PasswordsScalarFieldEnum)[keyof typeof PasswordsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountsWhereInput = {
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    iAccountID?: IntFilter<"Accounts"> | number
    iEmployeeID?: IntFilter<"Accounts"> | number
    iStatus?: IntNullableFilter<"Accounts"> | number | null
    iCreateBy?: IntNullableFilter<"Accounts"> | number | null
    dtCreateAt?: DateTimeNullableFilter<"Accounts"> | Date | string | null
    iModifyBy?: IntNullableFilter<"Accounts"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Accounts"> | Date | string | null
    Employees?: XOR<EmployeesScalarRelationFilter, EmployeesWhereInput>
    Passwords?: XOR<PasswordsNullableScalarRelationFilter, PasswordsWhereInput> | null
  }

  export type AccountsOrderByWithRelationInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrderInput | SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrderInput | SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    Employees?: EmployeesOrderByWithRelationInput
    Passwords?: PasswordsOrderByWithRelationInput
  }

  export type AccountsWhereUniqueInput = Prisma.AtLeast<{
    iAccountID?: number
    iEmployeeID?: number
    AND?: AccountsWhereInput | AccountsWhereInput[]
    OR?: AccountsWhereInput[]
    NOT?: AccountsWhereInput | AccountsWhereInput[]
    iStatus?: IntNullableFilter<"Accounts"> | number | null
    iCreateBy?: IntNullableFilter<"Accounts"> | number | null
    dtCreateAt?: DateTimeNullableFilter<"Accounts"> | Date | string | null
    iModifyBy?: IntNullableFilter<"Accounts"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Accounts"> | Date | string | null
    Employees?: XOR<EmployeesScalarRelationFilter, EmployeesWhereInput>
    Passwords?: XOR<PasswordsNullableScalarRelationFilter, PasswordsWhereInput> | null
  }, "iAccountID" | "iEmployeeID">

  export type AccountsOrderByWithAggregationInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrderInput | SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrderInput | SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    _count?: AccountsCountOrderByAggregateInput
    _avg?: AccountsAvgOrderByAggregateInput
    _max?: AccountsMaxOrderByAggregateInput
    _min?: AccountsMinOrderByAggregateInput
    _sum?: AccountsSumOrderByAggregateInput
  }

  export type AccountsScalarWhereWithAggregatesInput = {
    AND?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    OR?: AccountsScalarWhereWithAggregatesInput[]
    NOT?: AccountsScalarWhereWithAggregatesInput | AccountsScalarWhereWithAggregatesInput[]
    iAccountID?: IntWithAggregatesFilter<"Accounts"> | number
    iEmployeeID?: IntWithAggregatesFilter<"Accounts"> | number
    iStatus?: IntNullableWithAggregatesFilter<"Accounts"> | number | null
    iCreateBy?: IntNullableWithAggregatesFilter<"Accounts"> | number | null
    dtCreateAt?: DateTimeNullableWithAggregatesFilter<"Accounts"> | Date | string | null
    iModifyBy?: IntNullableWithAggregatesFilter<"Accounts"> | number | null
    dtModifyAt?: DateTimeNullableWithAggregatesFilter<"Accounts"> | Date | string | null
  }

  export type EmployeesWhereInput = {
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    iEmployeeID?: IntFilter<"Employees"> | number
    sEmpID?: StringFilter<"Employees"> | string
    sFullName?: StringFilter<"Employees"> | string
    sEmail?: StringNullableFilter<"Employees"> | string | null
    sDepartment?: StringNullableFilter<"Employees"> | string | null
    sRole?: StringNullableFilter<"Employees"> | string | null
    dtHireDate?: DateTimeNullableFilter<"Employees"> | Date | string | null
    iSafetyYet?: IntNullableFilter<"Employees"> | number | null
    dtLastSafetyTraining?: DateTimeNullableFilter<"Employees"> | Date | string | null
    iStatus?: IntNullableFilter<"Employees"> | number | null
    iCreateBy?: IntNullableFilter<"Employees"> | number | null
    dtCreateAt?: DateTimeNullableFilter<"Employees"> | Date | string | null
    iModifyBy?: IntNullableFilter<"Employees"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Employees"> | Date | string | null
    Accounts?: XOR<AccountsNullableScalarRelationFilter, AccountsWhereInput> | null
  }

  export type EmployeesOrderByWithRelationInput = {
    iEmployeeID?: SortOrder
    sEmpID?: SortOrder
    sFullName?: SortOrder
    sEmail?: SortOrderInput | SortOrder
    sDepartment?: SortOrderInput | SortOrder
    sRole?: SortOrderInput | SortOrder
    dtHireDate?: SortOrderInput | SortOrder
    iSafetyYet?: SortOrderInput | SortOrder
    dtLastSafetyTraining?: SortOrderInput | SortOrder
    iStatus?: SortOrderInput | SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrderInput | SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    Accounts?: AccountsOrderByWithRelationInput
  }

  export type EmployeesWhereUniqueInput = Prisma.AtLeast<{
    iEmployeeID?: number
    sEmpID?: string
    sEmail?: string
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    sFullName?: StringFilter<"Employees"> | string
    sDepartment?: StringNullableFilter<"Employees"> | string | null
    sRole?: StringNullableFilter<"Employees"> | string | null
    dtHireDate?: DateTimeNullableFilter<"Employees"> | Date | string | null
    iSafetyYet?: IntNullableFilter<"Employees"> | number | null
    dtLastSafetyTraining?: DateTimeNullableFilter<"Employees"> | Date | string | null
    iStatus?: IntNullableFilter<"Employees"> | number | null
    iCreateBy?: IntNullableFilter<"Employees"> | number | null
    dtCreateAt?: DateTimeNullableFilter<"Employees"> | Date | string | null
    iModifyBy?: IntNullableFilter<"Employees"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Employees"> | Date | string | null
    Accounts?: XOR<AccountsNullableScalarRelationFilter, AccountsWhereInput> | null
  }, "iEmployeeID" | "sEmpID" | "sEmail">

  export type EmployeesOrderByWithAggregationInput = {
    iEmployeeID?: SortOrder
    sEmpID?: SortOrder
    sFullName?: SortOrder
    sEmail?: SortOrderInput | SortOrder
    sDepartment?: SortOrderInput | SortOrder
    sRole?: SortOrderInput | SortOrder
    dtHireDate?: SortOrderInput | SortOrder
    iSafetyYet?: SortOrderInput | SortOrder
    dtLastSafetyTraining?: SortOrderInput | SortOrder
    iStatus?: SortOrderInput | SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrderInput | SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    _count?: EmployeesCountOrderByAggregateInput
    _avg?: EmployeesAvgOrderByAggregateInput
    _max?: EmployeesMaxOrderByAggregateInput
    _min?: EmployeesMinOrderByAggregateInput
    _sum?: EmployeesSumOrderByAggregateInput
  }

  export type EmployeesScalarWhereWithAggregatesInput = {
    AND?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    OR?: EmployeesScalarWhereWithAggregatesInput[]
    NOT?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    iEmployeeID?: IntWithAggregatesFilter<"Employees"> | number
    sEmpID?: StringWithAggregatesFilter<"Employees"> | string
    sFullName?: StringWithAggregatesFilter<"Employees"> | string
    sEmail?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    sDepartment?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    sRole?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    dtHireDate?: DateTimeNullableWithAggregatesFilter<"Employees"> | Date | string | null
    iSafetyYet?: IntNullableWithAggregatesFilter<"Employees"> | number | null
    dtLastSafetyTraining?: DateTimeNullableWithAggregatesFilter<"Employees"> | Date | string | null
    iStatus?: IntNullableWithAggregatesFilter<"Employees"> | number | null
    iCreateBy?: IntNullableWithAggregatesFilter<"Employees"> | number | null
    dtCreateAt?: DateTimeNullableWithAggregatesFilter<"Employees"> | Date | string | null
    iModifyBy?: IntNullableWithAggregatesFilter<"Employees"> | number | null
    dtModifyAt?: DateTimeNullableWithAggregatesFilter<"Employees"> | Date | string | null
  }

  export type PasswordsWhereInput = {
    AND?: PasswordsWhereInput | PasswordsWhereInput[]
    OR?: PasswordsWhereInput[]
    NOT?: PasswordsWhereInput | PasswordsWhereInput[]
    iPasswordID?: IntFilter<"Passwords"> | number
    iAccountID?: IntFilter<"Passwords"> | number
    sPassword?: StringFilter<"Passwords"> | string
    iStatus?: IntNullableFilter<"Passwords"> | number | null
    iCreateBy?: IntNullableFilter<"Passwords"> | number | null
    dtCreateAt?: DateTimeNullableFilter<"Passwords"> | Date | string | null
    iModifyBy?: IntNullableFilter<"Passwords"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Passwords"> | Date | string | null
    Accounts?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }

  export type PasswordsOrderByWithRelationInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    sPassword?: SortOrder
    iStatus?: SortOrderInput | SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrderInput | SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    Accounts?: AccountsOrderByWithRelationInput
  }

  export type PasswordsWhereUniqueInput = Prisma.AtLeast<{
    iPasswordID?: number
    iAccountID?: number
    AND?: PasswordsWhereInput | PasswordsWhereInput[]
    OR?: PasswordsWhereInput[]
    NOT?: PasswordsWhereInput | PasswordsWhereInput[]
    sPassword?: StringFilter<"Passwords"> | string
    iStatus?: IntNullableFilter<"Passwords"> | number | null
    iCreateBy?: IntNullableFilter<"Passwords"> | number | null
    dtCreateAt?: DateTimeNullableFilter<"Passwords"> | Date | string | null
    iModifyBy?: IntNullableFilter<"Passwords"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Passwords"> | Date | string | null
    Accounts?: XOR<AccountsScalarRelationFilter, AccountsWhereInput>
  }, "iPasswordID" | "iAccountID">

  export type PasswordsOrderByWithAggregationInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    sPassword?: SortOrder
    iStatus?: SortOrderInput | SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrderInput | SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    _count?: PasswordsCountOrderByAggregateInput
    _avg?: PasswordsAvgOrderByAggregateInput
    _max?: PasswordsMaxOrderByAggregateInput
    _min?: PasswordsMinOrderByAggregateInput
    _sum?: PasswordsSumOrderByAggregateInput
  }

  export type PasswordsScalarWhereWithAggregatesInput = {
    AND?: PasswordsScalarWhereWithAggregatesInput | PasswordsScalarWhereWithAggregatesInput[]
    OR?: PasswordsScalarWhereWithAggregatesInput[]
    NOT?: PasswordsScalarWhereWithAggregatesInput | PasswordsScalarWhereWithAggregatesInput[]
    iPasswordID?: IntWithAggregatesFilter<"Passwords"> | number
    iAccountID?: IntWithAggregatesFilter<"Passwords"> | number
    sPassword?: StringWithAggregatesFilter<"Passwords"> | string
    iStatus?: IntNullableWithAggregatesFilter<"Passwords"> | number | null
    iCreateBy?: IntNullableWithAggregatesFilter<"Passwords"> | number | null
    dtCreateAt?: DateTimeNullableWithAggregatesFilter<"Passwords"> | Date | string | null
    iModifyBy?: IntNullableWithAggregatesFilter<"Passwords"> | number | null
    dtModifyAt?: DateTimeNullableWithAggregatesFilter<"Passwords"> | Date | string | null
  }

  export type AccountsCreateInput = {
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    Employees: EmployeesCreateNestedOneWithoutAccountsInput
    Passwords?: PasswordsCreateNestedOneWithoutAccountsInput
  }

  export type AccountsUncheckedCreateInput = {
    iAccountID?: number
    iEmployeeID: number
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    Passwords?: PasswordsUncheckedCreateNestedOneWithoutAccountsInput
  }

  export type AccountsUpdateInput = {
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employees?: EmployeesUpdateOneRequiredWithoutAccountsNestedInput
    Passwords?: PasswordsUpdateOneWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateInput = {
    iAccountID?: IntFieldUpdateOperationsInput | number
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Passwords?: PasswordsUncheckedUpdateOneWithoutAccountsNestedInput
  }

  export type AccountsCreateManyInput = {
    iAccountID?: number
    iEmployeeID: number
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type AccountsUpdateManyMutationInput = {
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountsUncheckedUpdateManyInput = {
    iAccountID?: IntFieldUpdateOperationsInput | number
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeesCreateInput = {
    sEmpID: string
    sFullName: string
    sEmail?: string | null
    sDepartment?: string | null
    sRole?: string | null
    dtHireDate?: Date | string | null
    iSafetyYet?: number | null
    dtLastSafetyTraining?: Date | string | null
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    Accounts?: AccountsCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeesUncheckedCreateInput = {
    iEmployeeID?: number
    sEmpID: string
    sFullName: string
    sEmail?: string | null
    sDepartment?: string | null
    sRole?: string | null
    dtHireDate?: Date | string | null
    iSafetyYet?: number | null
    dtLastSafetyTraining?: Date | string | null
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    Accounts?: AccountsUncheckedCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeesUpdateInput = {
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Accounts?: AccountsUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeesUncheckedUpdateInput = {
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Accounts?: AccountsUncheckedUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeesCreateManyInput = {
    iEmployeeID?: number
    sEmpID: string
    sFullName: string
    sEmail?: string | null
    sDepartment?: string | null
    sRole?: string | null
    dtHireDate?: Date | string | null
    iSafetyYet?: number | null
    dtLastSafetyTraining?: Date | string | null
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type EmployeesUpdateManyMutationInput = {
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeesUncheckedUpdateManyInput = {
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordsCreateInput = {
    sPassword: string
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    Accounts: AccountsCreateNestedOneWithoutPasswordsInput
  }

  export type PasswordsUncheckedCreateInput = {
    iPasswordID?: number
    iAccountID: number
    sPassword: string
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type PasswordsUpdateInput = {
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Accounts?: AccountsUpdateOneRequiredWithoutPasswordsNestedInput
  }

  export type PasswordsUncheckedUpdateInput = {
    iPasswordID?: IntFieldUpdateOperationsInput | number
    iAccountID?: IntFieldUpdateOperationsInput | number
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordsCreateManyInput = {
    iPasswordID?: number
    iAccountID: number
    sPassword: string
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type PasswordsUpdateManyMutationInput = {
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordsUncheckedUpdateManyInput = {
    iPasswordID?: IntFieldUpdateOperationsInput | number
    iAccountID?: IntFieldUpdateOperationsInput | number
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmployeesScalarRelationFilter = {
    is?: EmployeesWhereInput
    isNot?: EmployeesWhereInput
  }

  export type PasswordsNullableScalarRelationFilter = {
    is?: PasswordsWhereInput | null
    isNot?: PasswordsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountsCountOrderByAggregateInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type AccountsAvgOrderByAggregateInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type AccountsMaxOrderByAggregateInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type AccountsMinOrderByAggregateInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type AccountsSumOrderByAggregateInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AccountsNullableScalarRelationFilter = {
    is?: AccountsWhereInput | null
    isNot?: AccountsWhereInput | null
  }

  export type EmployeesCountOrderByAggregateInput = {
    iEmployeeID?: SortOrder
    sEmpID?: SortOrder
    sFullName?: SortOrder
    sEmail?: SortOrder
    sDepartment?: SortOrder
    sRole?: SortOrder
    dtHireDate?: SortOrder
    iSafetyYet?: SortOrder
    dtLastSafetyTraining?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type EmployeesAvgOrderByAggregateInput = {
    iEmployeeID?: SortOrder
    iSafetyYet?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type EmployeesMaxOrderByAggregateInput = {
    iEmployeeID?: SortOrder
    sEmpID?: SortOrder
    sFullName?: SortOrder
    sEmail?: SortOrder
    sDepartment?: SortOrder
    sRole?: SortOrder
    dtHireDate?: SortOrder
    iSafetyYet?: SortOrder
    dtLastSafetyTraining?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type EmployeesMinOrderByAggregateInput = {
    iEmployeeID?: SortOrder
    sEmpID?: SortOrder
    sFullName?: SortOrder
    sEmail?: SortOrder
    sDepartment?: SortOrder
    sRole?: SortOrder
    dtHireDate?: SortOrder
    iSafetyYet?: SortOrder
    dtLastSafetyTraining?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type EmployeesSumOrderByAggregateInput = {
    iEmployeeID?: SortOrder
    iSafetyYet?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AccountsScalarRelationFilter = {
    is?: AccountsWhereInput
    isNot?: AccountsWhereInput
  }

  export type PasswordsCountOrderByAggregateInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    sPassword?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type PasswordsAvgOrderByAggregateInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type PasswordsMaxOrderByAggregateInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    sPassword?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type PasswordsMinOrderByAggregateInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    sPassword?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type PasswordsSumOrderByAggregateInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type EmployeesCreateNestedOneWithoutAccountsInput = {
    create?: XOR<EmployeesCreateWithoutAccountsInput, EmployeesUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutAccountsInput
    connect?: EmployeesWhereUniqueInput
  }

  export type PasswordsCreateNestedOneWithoutAccountsInput = {
    create?: XOR<PasswordsCreateWithoutAccountsInput, PasswordsUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: PasswordsCreateOrConnectWithoutAccountsInput
    connect?: PasswordsWhereUniqueInput
  }

  export type PasswordsUncheckedCreateNestedOneWithoutAccountsInput = {
    create?: XOR<PasswordsCreateWithoutAccountsInput, PasswordsUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: PasswordsCreateOrConnectWithoutAccountsInput
    connect?: PasswordsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmployeesUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<EmployeesCreateWithoutAccountsInput, EmployeesUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutAccountsInput
    upsert?: EmployeesUpsertWithoutAccountsInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutAccountsInput, EmployeesUpdateWithoutAccountsInput>, EmployeesUncheckedUpdateWithoutAccountsInput>
  }

  export type PasswordsUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<PasswordsCreateWithoutAccountsInput, PasswordsUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: PasswordsCreateOrConnectWithoutAccountsInput
    upsert?: PasswordsUpsertWithoutAccountsInput
    disconnect?: PasswordsWhereInput | boolean
    delete?: PasswordsWhereInput | boolean
    connect?: PasswordsWhereUniqueInput
    update?: XOR<XOR<PasswordsUpdateToOneWithWhereWithoutAccountsInput, PasswordsUpdateWithoutAccountsInput>, PasswordsUncheckedUpdateWithoutAccountsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PasswordsUncheckedUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<PasswordsCreateWithoutAccountsInput, PasswordsUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: PasswordsCreateOrConnectWithoutAccountsInput
    upsert?: PasswordsUpsertWithoutAccountsInput
    disconnect?: PasswordsWhereInput | boolean
    delete?: PasswordsWhereInput | boolean
    connect?: PasswordsWhereUniqueInput
    update?: XOR<XOR<PasswordsUpdateToOneWithWhereWithoutAccountsInput, PasswordsUpdateWithoutAccountsInput>, PasswordsUncheckedUpdateWithoutAccountsInput>
  }

  export type AccountsCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<AccountsCreateWithoutEmployeesInput, AccountsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutEmployeesInput
    connect?: AccountsWhereUniqueInput
  }

  export type AccountsUncheckedCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<AccountsCreateWithoutEmployeesInput, AccountsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutEmployeesInput
    connect?: AccountsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccountsUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<AccountsCreateWithoutEmployeesInput, AccountsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutEmployeesInput
    upsert?: AccountsUpsertWithoutEmployeesInput
    disconnect?: AccountsWhereInput | boolean
    delete?: AccountsWhereInput | boolean
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutEmployeesInput, AccountsUpdateWithoutEmployeesInput>, AccountsUncheckedUpdateWithoutEmployeesInput>
  }

  export type AccountsUncheckedUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<AccountsCreateWithoutEmployeesInput, AccountsUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutEmployeesInput
    upsert?: AccountsUpsertWithoutEmployeesInput
    disconnect?: AccountsWhereInput | boolean
    delete?: AccountsWhereInput | boolean
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutEmployeesInput, AccountsUpdateWithoutEmployeesInput>, AccountsUncheckedUpdateWithoutEmployeesInput>
  }

  export type AccountsCreateNestedOneWithoutPasswordsInput = {
    create?: XOR<AccountsCreateWithoutPasswordsInput, AccountsUncheckedCreateWithoutPasswordsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutPasswordsInput
    connect?: AccountsWhereUniqueInput
  }

  export type AccountsUpdateOneRequiredWithoutPasswordsNestedInput = {
    create?: XOR<AccountsCreateWithoutPasswordsInput, AccountsUncheckedCreateWithoutPasswordsInput>
    connectOrCreate?: AccountsCreateOrConnectWithoutPasswordsInput
    upsert?: AccountsUpsertWithoutPasswordsInput
    connect?: AccountsWhereUniqueInput
    update?: XOR<XOR<AccountsUpdateToOneWithWhereWithoutPasswordsInput, AccountsUpdateWithoutPasswordsInput>, AccountsUncheckedUpdateWithoutPasswordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EmployeesCreateWithoutAccountsInput = {
    sEmpID: string
    sFullName: string
    sEmail?: string | null
    sDepartment?: string | null
    sRole?: string | null
    dtHireDate?: Date | string | null
    iSafetyYet?: number | null
    dtLastSafetyTraining?: Date | string | null
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type EmployeesUncheckedCreateWithoutAccountsInput = {
    iEmployeeID?: number
    sEmpID: string
    sFullName: string
    sEmail?: string | null
    sDepartment?: string | null
    sRole?: string | null
    dtHireDate?: Date | string | null
    iSafetyYet?: number | null
    dtLastSafetyTraining?: Date | string | null
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type EmployeesCreateOrConnectWithoutAccountsInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutAccountsInput, EmployeesUncheckedCreateWithoutAccountsInput>
  }

  export type PasswordsCreateWithoutAccountsInput = {
    sPassword: string
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type PasswordsUncheckedCreateWithoutAccountsInput = {
    iPasswordID?: number
    sPassword: string
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type PasswordsCreateOrConnectWithoutAccountsInput = {
    where: PasswordsWhereUniqueInput
    create: XOR<PasswordsCreateWithoutAccountsInput, PasswordsUncheckedCreateWithoutAccountsInput>
  }

  export type EmployeesUpsertWithoutAccountsInput = {
    update: XOR<EmployeesUpdateWithoutAccountsInput, EmployeesUncheckedUpdateWithoutAccountsInput>
    create: XOR<EmployeesCreateWithoutAccountsInput, EmployeesUncheckedCreateWithoutAccountsInput>
    where?: EmployeesWhereInput
  }

  export type EmployeesUpdateToOneWithWhereWithoutAccountsInput = {
    where?: EmployeesWhereInput
    data: XOR<EmployeesUpdateWithoutAccountsInput, EmployeesUncheckedUpdateWithoutAccountsInput>
  }

  export type EmployeesUpdateWithoutAccountsInput = {
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeesUncheckedUpdateWithoutAccountsInput = {
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordsUpsertWithoutAccountsInput = {
    update: XOR<PasswordsUpdateWithoutAccountsInput, PasswordsUncheckedUpdateWithoutAccountsInput>
    create: XOR<PasswordsCreateWithoutAccountsInput, PasswordsUncheckedCreateWithoutAccountsInput>
    where?: PasswordsWhereInput
  }

  export type PasswordsUpdateToOneWithWhereWithoutAccountsInput = {
    where?: PasswordsWhereInput
    data: XOR<PasswordsUpdateWithoutAccountsInput, PasswordsUncheckedUpdateWithoutAccountsInput>
  }

  export type PasswordsUpdateWithoutAccountsInput = {
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordsUncheckedUpdateWithoutAccountsInput = {
    iPasswordID?: IntFieldUpdateOperationsInput | number
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountsCreateWithoutEmployeesInput = {
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    Passwords?: PasswordsCreateNestedOneWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutEmployeesInput = {
    iAccountID?: number
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    Passwords?: PasswordsUncheckedCreateNestedOneWithoutAccountsInput
  }

  export type AccountsCreateOrConnectWithoutEmployeesInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutEmployeesInput, AccountsUncheckedCreateWithoutEmployeesInput>
  }

  export type AccountsUpsertWithoutEmployeesInput = {
    update: XOR<AccountsUpdateWithoutEmployeesInput, AccountsUncheckedUpdateWithoutEmployeesInput>
    create: XOR<AccountsCreateWithoutEmployeesInput, AccountsUncheckedCreateWithoutEmployeesInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutEmployeesInput, AccountsUncheckedUpdateWithoutEmployeesInput>
  }

  export type AccountsUpdateWithoutEmployeesInput = {
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Passwords?: PasswordsUpdateOneWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutEmployeesInput = {
    iAccountID?: IntFieldUpdateOperationsInput | number
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Passwords?: PasswordsUncheckedUpdateOneWithoutAccountsNestedInput
  }

  export type AccountsCreateWithoutPasswordsInput = {
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    Employees: EmployeesCreateNestedOneWithoutAccountsInput
  }

  export type AccountsUncheckedCreateWithoutPasswordsInput = {
    iAccountID?: number
    iEmployeeID: number
    iStatus?: number | null
    iCreateBy?: number | null
    dtCreateAt?: Date | string | null
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type AccountsCreateOrConnectWithoutPasswordsInput = {
    where: AccountsWhereUniqueInput
    create: XOR<AccountsCreateWithoutPasswordsInput, AccountsUncheckedCreateWithoutPasswordsInput>
  }

  export type AccountsUpsertWithoutPasswordsInput = {
    update: XOR<AccountsUpdateWithoutPasswordsInput, AccountsUncheckedUpdateWithoutPasswordsInput>
    create: XOR<AccountsCreateWithoutPasswordsInput, AccountsUncheckedCreateWithoutPasswordsInput>
    where?: AccountsWhereInput
  }

  export type AccountsUpdateToOneWithWhereWithoutPasswordsInput = {
    where?: AccountsWhereInput
    data: XOR<AccountsUpdateWithoutPasswordsInput, AccountsUncheckedUpdateWithoutPasswordsInput>
  }

  export type AccountsUpdateWithoutPasswordsInput = {
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Employees?: EmployeesUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountsUncheckedUpdateWithoutPasswordsInput = {
    iAccountID?: IntFieldUpdateOperationsInput | number
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    iStatus?: NullableIntFieldUpdateOperationsInput | number | null
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}