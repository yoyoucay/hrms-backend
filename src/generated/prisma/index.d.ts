
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
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Password
 * 
 */
export type Password = $Result.DefaultSelection<Prisma.$PasswordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Employees
 * const employees = await prisma.employee.findMany()
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
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
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
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password`: Exposes CRUD operations for the **Password** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passwords
    * const passwords = await prisma.password.findMany()
    * ```
    */
  get password(): Prisma.PasswordDelegate<ExtArgs, ClientOptions>;
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
    Employee: 'Employee',
    Account: 'Account',
    Password: 'Password'
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
      modelProps: "employee" | "account" | "password"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Password: {
        payload: Prisma.$PasswordPayload<ExtArgs>
        fields: Prisma.PasswordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          findFirst: {
            args: Prisma.PasswordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          findMany: {
            args: Prisma.PasswordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>[]
          }
          create: {
            args: Prisma.PasswordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          createMany: {
            args: Prisma.PasswordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>[]
          }
          delete: {
            args: Prisma.PasswordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          update: {
            args: Prisma.PasswordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          deleteMany: {
            args: Prisma.PasswordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>[]
          }
          upsert: {
            args: Prisma.PasswordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordPayload>
          }
          aggregate: {
            args: Prisma.PasswordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword>
          }
          groupBy: {
            args: Prisma.PasswordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordCountAggregateOutputType> | number
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
    employee?: EmployeeOmit
    account?: AccountOmit
    password?: PasswordOmit
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
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    iEmployeeID: number | null
    iSafetyYet: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    iEmployeeID: number | null
    iSafetyYet: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type EmployeeMinAggregateOutputType = {
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

  export type EmployeeMaxAggregateOutputType = {
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

  export type EmployeeCountAggregateOutputType = {
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


  export type EmployeeAvgAggregateInputType = {
    iEmployeeID?: true
    iSafetyYet?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type EmployeeSumAggregateInputType = {
    iEmployeeID?: true
    iSafetyYet?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type EmployeeMinAggregateInputType = {
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

  export type EmployeeMaxAggregateInputType = {
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

  export type EmployeeCountAggregateInputType = {
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

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
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
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    iEmployeeID: number
    sEmpID: string
    sFullName: string
    sEmail: string | null
    sDepartment: string | null
    sRole: string | null
    dtHireDate: Date | null
    iSafetyYet: number | null
    dtLastSafetyTraining: Date | null
    iStatus: number
    iCreateBy: number | null
    dtCreateAt: Date
    iModifyBy: number | null
    dtModifyAt: Date | null
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    account?: boolean | Employee$accountArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
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

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"iEmployeeID" | "sEmpID" | "sFullName" | "sEmail" | "sDepartment" | "sRole" | "dtHireDate" | "iSafetyYet" | "dtLastSafetyTraining" | "iStatus" | "iCreateBy" | "dtCreateAt" | "iModifyBy" | "dtModifyAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Employee$accountArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
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
      iStatus: number
      iCreateBy: number | null
      dtCreateAt: Date
      iModifyBy: number | null
      dtModifyAt: Date | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `iEmployeeID`
     * const employeeWithIEmployeeIDOnly = await prisma.employee.findMany({ select: { iEmployeeID: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `iEmployeeID`
     * const employeeWithIEmployeeIDOnly = await prisma.employee.createManyAndReturn({
     *   select: { iEmployeeID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `iEmployeeID`
     * const employeeWithIEmployeeIDOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends Employee$accountArgs<ExtArgs> = {}>(args?: Subset<T, Employee$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly iEmployeeID: FieldRef<"Employee", 'Int'>
    readonly sEmpID: FieldRef<"Employee", 'String'>
    readonly sFullName: FieldRef<"Employee", 'String'>
    readonly sEmail: FieldRef<"Employee", 'String'>
    readonly sDepartment: FieldRef<"Employee", 'String'>
    readonly sRole: FieldRef<"Employee", 'String'>
    readonly dtHireDate: FieldRef<"Employee", 'DateTime'>
    readonly iSafetyYet: FieldRef<"Employee", 'Int'>
    readonly dtLastSafetyTraining: FieldRef<"Employee", 'DateTime'>
    readonly iStatus: FieldRef<"Employee", 'Int'>
    readonly iCreateBy: FieldRef<"Employee", 'Int'>
    readonly dtCreateAt: FieldRef<"Employee", 'DateTime'>
    readonly iModifyBy: FieldRef<"Employee", 'Int'>
    readonly dtModifyAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
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
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
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
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
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
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.account
   */
  export type Employee$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    iAccountID: number | null
    iEmployeeID: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type AccountSumAggregateOutputType = {
    iAccountID: number | null
    iEmployeeID: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type AccountMinAggregateOutputType = {
    iAccountID: number | null
    iEmployeeID: number | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    iAccountID: number | null
    iEmployeeID: number | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    iAccountID: number
    iEmployeeID: number
    iStatus: number
    iCreateBy: number
    dtCreateAt: number
    iModifyBy: number
    dtModifyAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    iAccountID?: true
    iEmployeeID?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type AccountSumAggregateInputType = {
    iAccountID?: true
    iEmployeeID?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type AccountMinAggregateInputType = {
    iAccountID?: true
    iEmployeeID?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
  }

  export type AccountMaxAggregateInputType = {
    iAccountID?: true
    iEmployeeID?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
  }

  export type AccountCountAggregateInputType = {
    iAccountID?: true
    iEmployeeID?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
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
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    iAccountID: number
    iEmployeeID: number
    iStatus: number
    iCreateBy: number | null
    dtCreateAt: Date
    iModifyBy: number | null
    dtModifyAt: Date | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iAccountID?: boolean
    iEmployeeID?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    password?: boolean | Account$passwordArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iAccountID?: boolean
    iEmployeeID?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iAccountID?: boolean
    iEmployeeID?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    iAccountID?: boolean
    iEmployeeID?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"iAccountID" | "iEmployeeID" | "iStatus" | "iCreateBy" | "dtCreateAt" | "iModifyBy" | "dtModifyAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    password?: boolean | Account$passwordArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      password: Prisma.$PasswordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      iAccountID: number
      iEmployeeID: number
      iStatus: number
      iCreateBy: number | null
      dtCreateAt: Date
      iModifyBy: number | null
      dtModifyAt: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `iAccountID`
     * const accountWithIAccountIDOnly = await prisma.account.findMany({ select: { iAccountID: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `iAccountID`
     * const accountWithIAccountIDOnly = await prisma.account.createManyAndReturn({
     *   select: { iAccountID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `iAccountID`
     * const accountWithIAccountIDOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    password<T extends Account$passwordArgs<ExtArgs> = {}>(args?: Subset<T, Account$passwordArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly iAccountID: FieldRef<"Account", 'Int'>
    readonly iEmployeeID: FieldRef<"Account", 'Int'>
    readonly iStatus: FieldRef<"Account", 'Int'>
    readonly iCreateBy: FieldRef<"Account", 'Int'>
    readonly dtCreateAt: FieldRef<"Account", 'DateTime'>
    readonly iModifyBy: FieldRef<"Account", 'Int'>
    readonly dtModifyAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
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
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
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
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
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
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.password
   */
  export type Account$passwordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    where?: PasswordWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Password
   */

  export type AggregatePassword = {
    _count: PasswordCountAggregateOutputType | null
    _avg: PasswordAvgAggregateOutputType | null
    _sum: PasswordSumAggregateOutputType | null
    _min: PasswordMinAggregateOutputType | null
    _max: PasswordMaxAggregateOutputType | null
  }

  export type PasswordAvgAggregateOutputType = {
    iPasswordID: number | null
    iAccountID: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type PasswordSumAggregateOutputType = {
    iPasswordID: number | null
    iAccountID: number | null
    iStatus: number | null
    iCreateBy: number | null
    iModifyBy: number | null
  }

  export type PasswordMinAggregateOutputType = {
    iPasswordID: number | null
    iAccountID: number | null
    sPassword: string | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
  }

  export type PasswordMaxAggregateOutputType = {
    iPasswordID: number | null
    iAccountID: number | null
    sPassword: string | null
    iStatus: number | null
    iCreateBy: number | null
    dtCreateAt: Date | null
    iModifyBy: number | null
    dtModifyAt: Date | null
  }

  export type PasswordCountAggregateOutputType = {
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


  export type PasswordAvgAggregateInputType = {
    iPasswordID?: true
    iAccountID?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type PasswordSumAggregateInputType = {
    iPasswordID?: true
    iAccountID?: true
    iStatus?: true
    iCreateBy?: true
    iModifyBy?: true
  }

  export type PasswordMinAggregateInputType = {
    iPasswordID?: true
    iAccountID?: true
    sPassword?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
  }

  export type PasswordMaxAggregateInputType = {
    iPasswordID?: true
    iAccountID?: true
    sPassword?: true
    iStatus?: true
    iCreateBy?: true
    dtCreateAt?: true
    iModifyBy?: true
    dtModifyAt?: true
  }

  export type PasswordCountAggregateInputType = {
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

  export type PasswordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Password to aggregate.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordWhereUniqueInput
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
    _count?: true | PasswordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordMaxAggregateInputType
  }

  export type GetPasswordAggregateType<T extends PasswordAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword[P]>
      : GetScalarType<T[P], AggregatePassword[P]>
  }




  export type PasswordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordWhereInput
    orderBy?: PasswordOrderByWithAggregationInput | PasswordOrderByWithAggregationInput[]
    by: PasswordScalarFieldEnum[] | PasswordScalarFieldEnum
    having?: PasswordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordCountAggregateInputType | true
    _avg?: PasswordAvgAggregateInputType
    _sum?: PasswordSumAggregateInputType
    _min?: PasswordMinAggregateInputType
    _max?: PasswordMaxAggregateInputType
  }

  export type PasswordGroupByOutputType = {
    iPasswordID: number
    iAccountID: number
    sPassword: string
    iStatus: number
    iCreateBy: number | null
    dtCreateAt: Date
    iModifyBy: number | null
    dtModifyAt: Date | null
    _count: PasswordCountAggregateOutputType | null
    _avg: PasswordAvgAggregateOutputType | null
    _sum: PasswordSumAggregateOutputType | null
    _min: PasswordMinAggregateOutputType | null
    _max: PasswordMaxAggregateOutputType | null
  }

  type GetPasswordGroupByPayload<T extends PasswordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordGroupByOutputType[P]>
        }
      >
    >


  export type PasswordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iPasswordID?: boolean
    iAccountID?: boolean
    sPassword?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password"]>

  export type PasswordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iPasswordID?: boolean
    iAccountID?: boolean
    sPassword?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password"]>

  export type PasswordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iPasswordID?: boolean
    iAccountID?: boolean
    sPassword?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password"]>

  export type PasswordSelectScalar = {
    iPasswordID?: boolean
    iAccountID?: boolean
    sPassword?: boolean
    iStatus?: boolean
    iCreateBy?: boolean
    dtCreateAt?: boolean
    iModifyBy?: boolean
    dtModifyAt?: boolean
  }

  export type PasswordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"iPasswordID" | "iAccountID" | "sPassword" | "iStatus" | "iCreateBy" | "dtCreateAt" | "iModifyBy" | "dtModifyAt", ExtArgs["result"]["password"]>
  export type PasswordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type PasswordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type PasswordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $PasswordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Password"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      iPasswordID: number
      iAccountID: number
      sPassword: string
      iStatus: number
      iCreateBy: number | null
      dtCreateAt: Date
      iModifyBy: number | null
      dtModifyAt: Date | null
    }, ExtArgs["result"]["password"]>
    composites: {}
  }

  type PasswordGetPayload<S extends boolean | null | undefined | PasswordDefaultArgs> = $Result.GetResult<Prisma.$PasswordPayload, S>

  type PasswordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordCountAggregateInputType | true
    }

  export interface PasswordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Password'], meta: { name: 'Password' } }
    /**
     * Find zero or one Password that matches the filter.
     * @param {PasswordFindUniqueArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordFindUniqueArgs>(args: SelectSubset<T, PasswordFindUniqueArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordFindUniqueOrThrowArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindFirstArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordFindFirstArgs>(args?: SelectSubset<T, PasswordFindFirstArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindFirstOrThrowArgs} args - Arguments to find a Password
     * @example
     * // Get one Password
     * const password = await prisma.password.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passwords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passwords
     * const passwords = await prisma.password.findMany()
     * 
     * // Get first 10 Passwords
     * const passwords = await prisma.password.findMany({ take: 10 })
     * 
     * // Only select the `iPasswordID`
     * const passwordWithIPasswordIDOnly = await prisma.password.findMany({ select: { iPasswordID: true } })
     * 
     */
    findMany<T extends PasswordFindManyArgs>(args?: SelectSubset<T, PasswordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password.
     * @param {PasswordCreateArgs} args - Arguments to create a Password.
     * @example
     * // Create one Password
     * const Password = await prisma.password.create({
     *   data: {
     *     // ... data to create a Password
     *   }
     * })
     * 
     */
    create<T extends PasswordCreateArgs>(args: SelectSubset<T, PasswordCreateArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passwords.
     * @param {PasswordCreateManyArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const password = await prisma.password.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordCreateManyArgs>(args?: SelectSubset<T, PasswordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passwords and returns the data saved in the database.
     * @param {PasswordCreateManyAndReturnArgs} args - Arguments to create many Passwords.
     * @example
     * // Create many Passwords
     * const password = await prisma.password.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passwords and only return the `iPasswordID`
     * const passwordWithIPasswordIDOnly = await prisma.password.createManyAndReturn({
     *   select: { iPasswordID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Password.
     * @param {PasswordDeleteArgs} args - Arguments to delete one Password.
     * @example
     * // Delete one Password
     * const Password = await prisma.password.delete({
     *   where: {
     *     // ... filter to delete one Password
     *   }
     * })
     * 
     */
    delete<T extends PasswordDeleteArgs>(args: SelectSubset<T, PasswordDeleteArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password.
     * @param {PasswordUpdateArgs} args - Arguments to update one Password.
     * @example
     * // Update one Password
     * const password = await prisma.password.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordUpdateArgs>(args: SelectSubset<T, PasswordUpdateArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passwords.
     * @param {PasswordDeleteManyArgs} args - Arguments to filter Passwords to delete.
     * @example
     * // Delete a few Passwords
     * const { count } = await prisma.password.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordDeleteManyArgs>(args?: SelectSubset<T, PasswordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passwords
     * const password = await prisma.password.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordUpdateManyArgs>(args: SelectSubset<T, PasswordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passwords and returns the data updated in the database.
     * @param {PasswordUpdateManyAndReturnArgs} args - Arguments to update many Passwords.
     * @example
     * // Update many Passwords
     * const password = await prisma.password.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passwords and only return the `iPasswordID`
     * const passwordWithIPasswordIDOnly = await prisma.password.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Password.
     * @param {PasswordUpsertArgs} args - Arguments to update or create a Password.
     * @example
     * // Update or create a Password
     * const password = await prisma.password.upsert({
     *   create: {
     *     // ... data to create a Password
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password we want to update
     *   }
     * })
     */
    upsert<T extends PasswordUpsertArgs>(args: SelectSubset<T, PasswordUpsertArgs<ExtArgs>>): Prisma__PasswordClient<$Result.GetResult<Prisma.$PasswordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passwords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordCountArgs} args - Arguments to filter Passwords to count.
     * @example
     * // Count the number of Passwords
     * const count = await prisma.password.count({
     *   where: {
     *     // ... the filter for the Passwords we want to count
     *   }
     * })
    **/
    count<T extends PasswordCountArgs>(
      args?: Subset<T, PasswordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordAggregateArgs>(args: Subset<T, PasswordAggregateArgs>): Prisma.PrismaPromise<GetPasswordAggregateType<T>>

    /**
     * Group by Password.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordGroupByArgs} args - Group by arguments.
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
      T extends PasswordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordGroupByArgs['orderBy'] }
        : { orderBy?: PasswordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Password model
   */
  readonly fields: PasswordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Password.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Password model
   */
  interface PasswordFieldRefs {
    readonly iPasswordID: FieldRef<"Password", 'Int'>
    readonly iAccountID: FieldRef<"Password", 'Int'>
    readonly sPassword: FieldRef<"Password", 'String'>
    readonly iStatus: FieldRef<"Password", 'Int'>
    readonly iCreateBy: FieldRef<"Password", 'Int'>
    readonly dtCreateAt: FieldRef<"Password", 'DateTime'>
    readonly iModifyBy: FieldRef<"Password", 'Int'>
    readonly dtModifyAt: FieldRef<"Password", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Password findUnique
   */
  export type PasswordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password findUniqueOrThrow
   */
  export type PasswordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password findFirst
   */
  export type PasswordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passwords.
     */
    cursor?: PasswordWhereUniqueInput
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
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * Password findFirstOrThrow
   */
  export type PasswordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Password to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passwords.
     */
    cursor?: PasswordWhereUniqueInput
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
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * Password findMany
   */
  export type PasswordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter, which Passwords to fetch.
     */
    where?: PasswordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passwords to fetch.
     */
    orderBy?: PasswordOrderByWithRelationInput | PasswordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passwords.
     */
    cursor?: PasswordWhereUniqueInput
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
    distinct?: PasswordScalarFieldEnum | PasswordScalarFieldEnum[]
  }

  /**
   * Password create
   */
  export type PasswordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The data needed to create a Password.
     */
    data: XOR<PasswordCreateInput, PasswordUncheckedCreateInput>
  }

  /**
   * Password createMany
   */
  export type PasswordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passwords.
     */
    data: PasswordCreateManyInput | PasswordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Password createManyAndReturn
   */
  export type PasswordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * The data used to create many Passwords.
     */
    data: PasswordCreateManyInput | PasswordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Password update
   */
  export type PasswordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The data needed to update a Password.
     */
    data: XOR<PasswordUpdateInput, PasswordUncheckedUpdateInput>
    /**
     * Choose, which Password to update.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password updateMany
   */
  export type PasswordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passwords.
     */
    data: XOR<PasswordUpdateManyMutationInput, PasswordUncheckedUpdateManyInput>
    /**
     * Filter which Passwords to update
     */
    where?: PasswordWhereInput
    /**
     * Limit how many Passwords to update.
     */
    limit?: number
  }

  /**
   * Password updateManyAndReturn
   */
  export type PasswordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * The data used to update Passwords.
     */
    data: XOR<PasswordUpdateManyMutationInput, PasswordUncheckedUpdateManyInput>
    /**
     * Filter which Passwords to update
     */
    where?: PasswordWhereInput
    /**
     * Limit how many Passwords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Password upsert
   */
  export type PasswordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * The filter to search for the Password to update in case it exists.
     */
    where: PasswordWhereUniqueInput
    /**
     * In case the Password found by the `where` argument doesn't exist, create a new Password with this data.
     */
    create: XOR<PasswordCreateInput, PasswordUncheckedCreateInput>
    /**
     * In case the Password was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordUpdateInput, PasswordUncheckedUpdateInput>
  }

  /**
   * Password delete
   */
  export type PasswordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
    /**
     * Filter which Password to delete.
     */
    where: PasswordWhereUniqueInput
  }

  /**
   * Password deleteMany
   */
  export type PasswordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passwords to delete
     */
    where?: PasswordWhereInput
    /**
     * Limit how many Passwords to delete.
     */
    limit?: number
  }

  /**
   * Password without action
   */
  export type PasswordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Password
     */
    select?: PasswordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Password
     */
    omit?: PasswordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordInclude<ExtArgs> | null
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


  export const EmployeeScalarFieldEnum: {
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

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    iAccountID: 'iAccountID',
    iEmployeeID: 'iEmployeeID',
    iStatus: 'iStatus',
    iCreateBy: 'iCreateBy',
    dtCreateAt: 'dtCreateAt',
    iModifyBy: 'iModifyBy',
    dtModifyAt: 'dtModifyAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const PasswordScalarFieldEnum: {
    iPasswordID: 'iPasswordID',
    iAccountID: 'iAccountID',
    sPassword: 'sPassword',
    iStatus: 'iStatus',
    iCreateBy: 'iCreateBy',
    dtCreateAt: 'dtCreateAt',
    iModifyBy: 'iModifyBy',
    dtModifyAt: 'dtModifyAt'
  };

  export type PasswordScalarFieldEnum = (typeof PasswordScalarFieldEnum)[keyof typeof PasswordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    iEmployeeID?: IntFilter<"Employee"> | number
    sEmpID?: StringFilter<"Employee"> | string
    sFullName?: StringFilter<"Employee"> | string
    sEmail?: StringNullableFilter<"Employee"> | string | null
    sDepartment?: StringNullableFilter<"Employee"> | string | null
    sRole?: StringNullableFilter<"Employee"> | string | null
    dtHireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    iSafetyYet?: IntNullableFilter<"Employee"> | number | null
    dtLastSafetyTraining?: DateTimeNullableFilter<"Employee"> | Date | string | null
    iStatus?: IntFilter<"Employee"> | number
    iCreateBy?: IntNullableFilter<"Employee"> | number | null
    dtCreateAt?: DateTimeFilter<"Employee"> | Date | string
    iModifyBy?: IntNullableFilter<"Employee"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type EmployeeOrderByWithRelationInput = {
    iEmployeeID?: SortOrder
    sEmpID?: SortOrder
    sFullName?: SortOrder
    sEmail?: SortOrderInput | SortOrder
    sDepartment?: SortOrderInput | SortOrder
    sRole?: SortOrderInput | SortOrder
    dtHireDate?: SortOrderInput | SortOrder
    iSafetyYet?: SortOrderInput | SortOrder
    dtLastSafetyTraining?: SortOrderInput | SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    iEmployeeID?: number
    sEmpID?: string
    sEmail?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    sFullName?: StringFilter<"Employee"> | string
    sDepartment?: StringNullableFilter<"Employee"> | string | null
    sRole?: StringNullableFilter<"Employee"> | string | null
    dtHireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    iSafetyYet?: IntNullableFilter<"Employee"> | number | null
    dtLastSafetyTraining?: DateTimeNullableFilter<"Employee"> | Date | string | null
    iStatus?: IntFilter<"Employee"> | number
    iCreateBy?: IntNullableFilter<"Employee"> | number | null
    dtCreateAt?: DateTimeFilter<"Employee"> | Date | string
    iModifyBy?: IntNullableFilter<"Employee"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Employee"> | Date | string | null
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "iEmployeeID" | "sEmpID" | "sEmail">

  export type EmployeeOrderByWithAggregationInput = {
    iEmployeeID?: SortOrder
    sEmpID?: SortOrder
    sFullName?: SortOrder
    sEmail?: SortOrderInput | SortOrder
    sDepartment?: SortOrderInput | SortOrder
    sRole?: SortOrderInput | SortOrder
    dtHireDate?: SortOrderInput | SortOrder
    iSafetyYet?: SortOrderInput | SortOrder
    dtLastSafetyTraining?: SortOrderInput | SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    iEmployeeID?: IntWithAggregatesFilter<"Employee"> | number
    sEmpID?: StringWithAggregatesFilter<"Employee"> | string
    sFullName?: StringWithAggregatesFilter<"Employee"> | string
    sEmail?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    sDepartment?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    sRole?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    dtHireDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    iSafetyYet?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    dtLastSafetyTraining?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    iStatus?: IntWithAggregatesFilter<"Employee"> | number
    iCreateBy?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    dtCreateAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    iModifyBy?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    dtModifyAt?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    iAccountID?: IntFilter<"Account"> | number
    iEmployeeID?: IntFilter<"Account"> | number
    iStatus?: IntFilter<"Account"> | number
    iCreateBy?: IntNullableFilter<"Account"> | number | null
    dtCreateAt?: DateTimeFilter<"Account"> | Date | string
    iModifyBy?: IntNullableFilter<"Account"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    password?: XOR<PasswordNullableScalarRelationFilter, PasswordWhereInput> | null
  }

  export type AccountOrderByWithRelationInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    password?: PasswordOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    iAccountID?: number
    iEmployeeID?: number
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    iStatus?: IntFilter<"Account"> | number
    iCreateBy?: IntNullableFilter<"Account"> | number | null
    dtCreateAt?: DateTimeFilter<"Account"> | Date | string
    iModifyBy?: IntNullableFilter<"Account"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    password?: XOR<PasswordNullableScalarRelationFilter, PasswordWhereInput> | null
  }, "iAccountID" | "iEmployeeID">

  export type AccountOrderByWithAggregationInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    iAccountID?: IntWithAggregatesFilter<"Account"> | number
    iEmployeeID?: IntWithAggregatesFilter<"Account"> | number
    iStatus?: IntWithAggregatesFilter<"Account"> | number
    iCreateBy?: IntNullableWithAggregatesFilter<"Account"> | number | null
    dtCreateAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    iModifyBy?: IntNullableWithAggregatesFilter<"Account"> | number | null
    dtModifyAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type PasswordWhereInput = {
    AND?: PasswordWhereInput | PasswordWhereInput[]
    OR?: PasswordWhereInput[]
    NOT?: PasswordWhereInput | PasswordWhereInput[]
    iPasswordID?: IntFilter<"Password"> | number
    iAccountID?: IntFilter<"Password"> | number
    sPassword?: StringFilter<"Password"> | string
    iStatus?: IntFilter<"Password"> | number
    iCreateBy?: IntNullableFilter<"Password"> | number | null
    dtCreateAt?: DateTimeFilter<"Password"> | Date | string
    iModifyBy?: IntNullableFilter<"Password"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Password"> | Date | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type PasswordOrderByWithRelationInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    sPassword?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type PasswordWhereUniqueInput = Prisma.AtLeast<{
    iPasswordID?: number
    iAccountID?: number
    AND?: PasswordWhereInput | PasswordWhereInput[]
    OR?: PasswordWhereInput[]
    NOT?: PasswordWhereInput | PasswordWhereInput[]
    sPassword?: StringFilter<"Password"> | string
    iStatus?: IntFilter<"Password"> | number
    iCreateBy?: IntNullableFilter<"Password"> | number | null
    dtCreateAt?: DateTimeFilter<"Password"> | Date | string
    iModifyBy?: IntNullableFilter<"Password"> | number | null
    dtModifyAt?: DateTimeNullableFilter<"Password"> | Date | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "iPasswordID" | "iAccountID">

  export type PasswordOrderByWithAggregationInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    sPassword?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrderInput | SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrderInput | SortOrder
    dtModifyAt?: SortOrderInput | SortOrder
    _count?: PasswordCountOrderByAggregateInput
    _avg?: PasswordAvgOrderByAggregateInput
    _max?: PasswordMaxOrderByAggregateInput
    _min?: PasswordMinOrderByAggregateInput
    _sum?: PasswordSumOrderByAggregateInput
  }

  export type PasswordScalarWhereWithAggregatesInput = {
    AND?: PasswordScalarWhereWithAggregatesInput | PasswordScalarWhereWithAggregatesInput[]
    OR?: PasswordScalarWhereWithAggregatesInput[]
    NOT?: PasswordScalarWhereWithAggregatesInput | PasswordScalarWhereWithAggregatesInput[]
    iPasswordID?: IntWithAggregatesFilter<"Password"> | number
    iAccountID?: IntWithAggregatesFilter<"Password"> | number
    sPassword?: StringWithAggregatesFilter<"Password"> | string
    iStatus?: IntWithAggregatesFilter<"Password"> | number
    iCreateBy?: IntNullableWithAggregatesFilter<"Password"> | number | null
    dtCreateAt?: DateTimeWithAggregatesFilter<"Password"> | Date | string
    iModifyBy?: IntNullableWithAggregatesFilter<"Password"> | number | null
    dtModifyAt?: DateTimeNullableWithAggregatesFilter<"Password"> | Date | string | null
  }

  export type EmployeeCreateInput = {
    sEmpID: string
    sFullName: string
    sEmail?: string | null
    sDepartment?: string | null
    sRole?: string | null
    dtHireDate?: Date | string | null
    iSafetyYet?: number | null
    dtLastSafetyTraining?: Date | string | null
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    account?: AccountCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    iEmployeeID?: number
    sEmpID: string
    sFullName: string
    sEmail?: string | null
    sDepartment?: string | null
    sRole?: string | null
    dtHireDate?: Date | string | null
    iSafetyYet?: number | null
    dtLastSafetyTraining?: Date | string | null
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    account?: AccountUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    iEmployeeID?: number
    sEmpID: string
    sFullName: string
    sEmail?: string | null
    sDepartment?: string | null
    sRole?: string | null
    dtHireDate?: Date | string | null
    iSafetyYet?: number | null
    dtLastSafetyTraining?: Date | string | null
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type EmployeeUpdateManyMutationInput = {
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    employee: EmployeeCreateNestedOneWithoutAccountInput
    password?: PasswordCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    iAccountID?: number
    iEmployeeID: number
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    password?: PasswordUncheckedCreateNestedOneWithoutAccountInput
  }

  export type AccountUpdateInput = {
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeeUpdateOneRequiredWithoutAccountNestedInput
    password?: PasswordUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    iAccountID?: IntFieldUpdateOperationsInput | number
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: PasswordUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    iAccountID?: number
    iEmployeeID: number
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    iAccountID?: IntFieldUpdateOperationsInput | number
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordCreateInput = {
    sPassword: string
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    account: AccountCreateNestedOneWithoutPasswordInput
  }

  export type PasswordUncheckedCreateInput = {
    iPasswordID?: number
    iAccountID: number
    sPassword: string
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type PasswordUpdateInput = {
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    account?: AccountUpdateOneRequiredWithoutPasswordNestedInput
  }

  export type PasswordUncheckedUpdateInput = {
    iPasswordID?: IntFieldUpdateOperationsInput | number
    iAccountID?: IntFieldUpdateOperationsInput | number
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordCreateManyInput = {
    iPasswordID?: number
    iAccountID: number
    sPassword: string
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type PasswordUpdateManyMutationInput = {
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordUncheckedUpdateManyInput = {
    iPasswordID?: IntFieldUpdateOperationsInput | number
    iAccountID?: IntFieldUpdateOperationsInput | number
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
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

  export type EmployeeAvgOrderByAggregateInput = {
    iEmployeeID?: SortOrder
    iSafetyYet?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
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

  export type EmployeeMinOrderByAggregateInput = {
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

  export type EmployeeSumOrderByAggregateInput = {
    iEmployeeID?: SortOrder
    iSafetyYet?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type PasswordNullableScalarRelationFilter = {
    is?: PasswordWhereInput | null
    isNot?: PasswordWhereInput | null
  }

  export type AccountCountOrderByAggregateInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    iAccountID?: SortOrder
    iEmployeeID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type PasswordCountOrderByAggregateInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    sPassword?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type PasswordAvgOrderByAggregateInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type PasswordMaxOrderByAggregateInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    sPassword?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type PasswordMinOrderByAggregateInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    sPassword?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    dtCreateAt?: SortOrder
    iModifyBy?: SortOrder
    dtModifyAt?: SortOrder
  }

  export type PasswordSumOrderByAggregateInput = {
    iPasswordID?: SortOrder
    iAccountID?: SortOrder
    iStatus?: SortOrder
    iCreateBy?: SortOrder
    iModifyBy?: SortOrder
  }

  export type AccountCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<AccountCreateWithoutEmployeeInput, AccountUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AccountCreateOrConnectWithoutEmployeeInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<AccountCreateWithoutEmployeeInput, AccountUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AccountCreateOrConnectWithoutEmployeeInput
    connect?: AccountWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<AccountCreateWithoutEmployeeInput, AccountUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AccountCreateOrConnectWithoutEmployeeInput
    upsert?: AccountUpsertWithoutEmployeeInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutEmployeeInput, AccountUpdateWithoutEmployeeInput>, AccountUncheckedUpdateWithoutEmployeeInput>
  }

  export type AccountUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<AccountCreateWithoutEmployeeInput, AccountUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AccountCreateOrConnectWithoutEmployeeInput
    upsert?: AccountUpsertWithoutEmployeeInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutEmployeeInput, AccountUpdateWithoutEmployeeInput>, AccountUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeCreateNestedOneWithoutAccountInput = {
    create?: XOR<EmployeeCreateWithoutAccountInput, EmployeeUncheckedCreateWithoutAccountInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAccountInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PasswordCreateNestedOneWithoutAccountInput = {
    create?: XOR<PasswordCreateWithoutAccountInput, PasswordUncheckedCreateWithoutAccountInput>
    connectOrCreate?: PasswordCreateOrConnectWithoutAccountInput
    connect?: PasswordWhereUniqueInput
  }

  export type PasswordUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<PasswordCreateWithoutAccountInput, PasswordUncheckedCreateWithoutAccountInput>
    connectOrCreate?: PasswordCreateOrConnectWithoutAccountInput
    connect?: PasswordWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<EmployeeCreateWithoutAccountInput, EmployeeUncheckedCreateWithoutAccountInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAccountInput
    upsert?: EmployeeUpsertWithoutAccountInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAccountInput, EmployeeUpdateWithoutAccountInput>, EmployeeUncheckedUpdateWithoutAccountInput>
  }

  export type PasswordUpdateOneWithoutAccountNestedInput = {
    create?: XOR<PasswordCreateWithoutAccountInput, PasswordUncheckedCreateWithoutAccountInput>
    connectOrCreate?: PasswordCreateOrConnectWithoutAccountInput
    upsert?: PasswordUpsertWithoutAccountInput
    disconnect?: PasswordWhereInput | boolean
    delete?: PasswordWhereInput | boolean
    connect?: PasswordWhereUniqueInput
    update?: XOR<XOR<PasswordUpdateToOneWithWhereWithoutAccountInput, PasswordUpdateWithoutAccountInput>, PasswordUncheckedUpdateWithoutAccountInput>
  }

  export type PasswordUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<PasswordCreateWithoutAccountInput, PasswordUncheckedCreateWithoutAccountInput>
    connectOrCreate?: PasswordCreateOrConnectWithoutAccountInput
    upsert?: PasswordUpsertWithoutAccountInput
    disconnect?: PasswordWhereInput | boolean
    delete?: PasswordWhereInput | boolean
    connect?: PasswordWhereUniqueInput
    update?: XOR<XOR<PasswordUpdateToOneWithWhereWithoutAccountInput, PasswordUpdateWithoutAccountInput>, PasswordUncheckedUpdateWithoutAccountInput>
  }

  export type AccountCreateNestedOneWithoutPasswordInput = {
    create?: XOR<AccountCreateWithoutPasswordInput, AccountUncheckedCreateWithoutPasswordInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPasswordInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutPasswordNestedInput = {
    create?: XOR<AccountCreateWithoutPasswordInput, AccountUncheckedCreateWithoutPasswordInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPasswordInput
    upsert?: AccountUpsertWithoutPasswordInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPasswordInput, AccountUpdateWithoutPasswordInput>, AccountUncheckedUpdateWithoutPasswordInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutEmployeeInput = {
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    password?: PasswordCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutEmployeeInput = {
    iAccountID?: number
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    password?: PasswordUncheckedCreateNestedOneWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutEmployeeInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutEmployeeInput, AccountUncheckedCreateWithoutEmployeeInput>
  }

  export type AccountUpsertWithoutEmployeeInput = {
    update: XOR<AccountUpdateWithoutEmployeeInput, AccountUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AccountCreateWithoutEmployeeInput, AccountUncheckedCreateWithoutEmployeeInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutEmployeeInput, AccountUncheckedUpdateWithoutEmployeeInput>
  }

  export type AccountUpdateWithoutEmployeeInput = {
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: PasswordUpdateOneWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutEmployeeInput = {
    iAccountID?: IntFieldUpdateOperationsInput | number
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: PasswordUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type EmployeeCreateWithoutAccountInput = {
    sEmpID: string
    sFullName: string
    sEmail?: string | null
    sDepartment?: string | null
    sRole?: string | null
    dtHireDate?: Date | string | null
    iSafetyYet?: number | null
    dtLastSafetyTraining?: Date | string | null
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type EmployeeUncheckedCreateWithoutAccountInput = {
    iEmployeeID?: number
    sEmpID: string
    sFullName: string
    sEmail?: string | null
    sDepartment?: string | null
    sRole?: string | null
    dtHireDate?: Date | string | null
    iSafetyYet?: number | null
    dtLastSafetyTraining?: Date | string | null
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type EmployeeCreateOrConnectWithoutAccountInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAccountInput, EmployeeUncheckedCreateWithoutAccountInput>
  }

  export type PasswordCreateWithoutAccountInput = {
    sPassword: string
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type PasswordUncheckedCreateWithoutAccountInput = {
    iPasswordID?: number
    sPassword: string
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type PasswordCreateOrConnectWithoutAccountInput = {
    where: PasswordWhereUniqueInput
    create: XOR<PasswordCreateWithoutAccountInput, PasswordUncheckedCreateWithoutAccountInput>
  }

  export type EmployeeUpsertWithoutAccountInput = {
    update: XOR<EmployeeUpdateWithoutAccountInput, EmployeeUncheckedUpdateWithoutAccountInput>
    create: XOR<EmployeeCreateWithoutAccountInput, EmployeeUncheckedCreateWithoutAccountInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAccountInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAccountInput, EmployeeUncheckedUpdateWithoutAccountInput>
  }

  export type EmployeeUpdateWithoutAccountInput = {
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmployeeUncheckedUpdateWithoutAccountInput = {
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    sEmpID?: StringFieldUpdateOperationsInput | string
    sFullName?: StringFieldUpdateOperationsInput | string
    sEmail?: NullableStringFieldUpdateOperationsInput | string | null
    sDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    sRole?: NullableStringFieldUpdateOperationsInput | string | null
    dtHireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iSafetyYet?: NullableIntFieldUpdateOperationsInput | number | null
    dtLastSafetyTraining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordUpsertWithoutAccountInput = {
    update: XOR<PasswordUpdateWithoutAccountInput, PasswordUncheckedUpdateWithoutAccountInput>
    create: XOR<PasswordCreateWithoutAccountInput, PasswordUncheckedCreateWithoutAccountInput>
    where?: PasswordWhereInput
  }

  export type PasswordUpdateToOneWithWhereWithoutAccountInput = {
    where?: PasswordWhereInput
    data: XOR<PasswordUpdateWithoutAccountInput, PasswordUncheckedUpdateWithoutAccountInput>
  }

  export type PasswordUpdateWithoutAccountInput = {
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordUncheckedUpdateWithoutAccountInput = {
    iPasswordID?: IntFieldUpdateOperationsInput | number
    sPassword?: StringFieldUpdateOperationsInput | string
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateWithoutPasswordInput = {
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
    employee: EmployeeCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutPasswordInput = {
    iAccountID?: number
    iEmployeeID: number
    iStatus?: number
    iCreateBy?: number | null
    dtCreateAt?: Date | string
    iModifyBy?: number | null
    dtModifyAt?: Date | string | null
  }

  export type AccountCreateOrConnectWithoutPasswordInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPasswordInput, AccountUncheckedCreateWithoutPasswordInput>
  }

  export type AccountUpsertWithoutPasswordInput = {
    update: XOR<AccountUpdateWithoutPasswordInput, AccountUncheckedUpdateWithoutPasswordInput>
    create: XOR<AccountCreateWithoutPasswordInput, AccountUncheckedCreateWithoutPasswordInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutPasswordInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutPasswordInput, AccountUncheckedUpdateWithoutPasswordInput>
  }

  export type AccountUpdateWithoutPasswordInput = {
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iModifyBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtModifyAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeeUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutPasswordInput = {
    iAccountID?: IntFieldUpdateOperationsInput | number
    iEmployeeID?: IntFieldUpdateOperationsInput | number
    iStatus?: IntFieldUpdateOperationsInput | number
    iCreateBy?: NullableIntFieldUpdateOperationsInput | number | null
    dtCreateAt?: DateTimeFieldUpdateOperationsInput | Date | string
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