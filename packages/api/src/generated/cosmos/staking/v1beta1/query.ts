/* eslint-disable */
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Validator, DelegationResponse, UnbondingDelegation, RedelegationResponse, HistoricalInfo, Pool, Params } from '../../../cosmos/staking/v1beta1/staking';
import { Reader, Writer, util, configure } from 'protobufjs/minimal';
import * as Long from 'long';


/**
 *  QueryValidatorsRequest is request type for Query/Validators RPC method.
 */
export interface QueryValidatorsRequest {
  /**
   *  status enables to query for validators matching a given status.
   */
  status: string;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  QueryValidatorsResponse is response type for the Query/Validators RPC method
 */
export interface QueryValidatorsResponse {
  /**
   *  validators contains all the queried validators.
   */
  validators: Validator[];
  /**
   *  pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}

/**
 *  QueryValidatorRequest is response type for the Query/Validator RPC method
 */
export interface QueryValidatorRequest {
  /**
   *  validator_addr defines the validator address to query for.
   */
  validatorAddr: string;
}

/**
 *  QueryValidatorResponse is response type for the Query/Validator RPC method
 */
export interface QueryValidatorResponse {
  /**
   *  validator defines the the validator info.
   */
  validator?: Validator;
}

/**
 *  QueryValidatorDelegationsRequest is request type for the
 *  Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
  /**
   *  validator_addr defines the validator address to query for.
   */
  validatorAddr: string;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  QueryValidatorDelegationsResponse is response type for the
 *  Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  /**
   *  pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}

/**
 *  QueryValidatorUnbondingDelegationsRequest is required type for the
 *  Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  /**
   *  validator_addr defines the validator address to query for.
   */
  validatorAddr: string;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  QueryValidatorUnbondingDelegationsResponse is response type for the
 *  Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /**
   *  pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}

/**
 *  QueryDelegationRequest is request type for the Query/Delegation RPC method.
 */
export interface QueryDelegationRequest {
  /**
   *  delegator_addr defines the delegator address to query for.
   */
  delegatorAddr: string;
  /**
   *  validator_addr defines the validator address to query for.
   */
  validatorAddr: string;
}

/**
 *  QueryDelegationResponse is response type for the Query/Delegation RPC method.
 */
export interface QueryDelegationResponse {
  /**
   *  delegation_responses defines the delegation info of a delegation.
   */
  delegationResponse?: DelegationResponse;
}

/**
 *  QueryUnbondingDelegationRequest is request type for the
 *  Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
  /**
   *  delegator_addr defines the delegator address to query for.
   */
  delegatorAddr: string;
  /**
   *  validator_addr defines the validator address to query for.
   */
  validatorAddr: string;
}

/**
 *  QueryDelegationResponse is response type for the Query/UnbondingDelegation
 *  RPC method.
 */
export interface QueryUnbondingDelegationResponse {
  /**
   *  unbond defines the unbonding information of a delegation.
   */
  unbond?: UnbondingDelegation;
}

/**
 *  QueryDelegatorDelegationsRequest is request type for the
 *  Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
  /**
   *  delegator_addr defines the delegator address to query for.
   */
  delegatorAddr: string;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  QueryDelegatorDelegationsResponse is response type for the
 *  Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  /**
   *  delegation_responses defines all the delegations' info of a delegator.
   */
  delegationResponses: DelegationResponse[];
  /**
   *  pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}

/**
 *  QueryDelegatorUnbondingDelegationsRequest is request type for the
 *  Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
  /**
   *  delegator_addr defines the delegator address to query for.
   */
  delegatorAddr: string;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  QueryUnbondingDelegatorDelegationsResponse is response type for the
 *  Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /**
   *  pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}

/**
 *  QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 *  method.
 */
export interface QueryRedelegationsRequest {
  /**
   *  delegator_addr defines the delegator address to query for.
   */
  delegatorAddr: string;
  /**
   *  src_validator_addr defines the validator address to redelegate from.
   */
  srcValidatorAddr: string;
  /**
   *  dst_validator_addr defines the validator address to redelegate to.
   */
  dstValidatorAddr: string;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 *  method.
 */
export interface QueryRedelegationsResponse {
  redelegationResponses: RedelegationResponse[];
  /**
   *  pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}

/**
 *  QueryDelegatorValidatorsRequest is request type for the
 *  Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /**
   *  delegator_addr defines the delegator address to query for.
   */
  delegatorAddr: string;
  /**
   *  pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}

/**
 *  QueryDelegatorValidatorsResponse is response type for the
 *  Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /**
   *  validators defines the the validators' info of a delegator.
   */
  validators: Validator[];
  /**
   *  pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}

/**
 *  QueryDelegatorValidatorRequest is request type for the
 *  Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
  /**
   *  delegator_addr defines the delegator address to query for.
   */
  delegatorAddr: string;
  /**
   *  validator_addr defines the validator address to query for.
   */
  validatorAddr: string;
}

/**
 *  QueryDelegatorValidatorResponse response type for the
 *  Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
  /**
   *  validator defines the the validator info.
   */
  validator?: Validator;
}

/**
 *  QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 *  method.
 */
export interface QueryHistoricalInfoRequest {
  /**
   *  height defines at which height to query the historical info.
   */
  height: number;
}

/**
 *  QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 *  method.
 */
export interface QueryHistoricalInfoResponse {
  /**
   *  hist defines the historical info at the given height.
   */
  hist?: HistoricalInfo;
}

/**
 *  QueryPoolRequest is request type for the Query/Pool RPC method.
 */
export interface QueryPoolRequest {
}

/**
 *  QueryPoolResponse is response type for the Query/Pool RPC method.
 */
export interface QueryPoolResponse {
  /**
   *  pool defines the pool info.
   */
  pool?: Pool;
}

/**
 *  QueryParamsRequest is request type for the Query/Params RPC method.
 */
export interface QueryParamsRequest {
}

/**
 *  QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface QueryParamsResponse {
  /**
   *  params holds all the parameters of this module.
   */
  params?: Params;
}

const baseQueryValidatorsRequest: object = {
  status: "",
};

const baseQueryValidatorsResponse: object = {
};

const baseQueryValidatorRequest: object = {
  validatorAddr: "",
};

const baseQueryValidatorResponse: object = {
};

const baseQueryValidatorDelegationsRequest: object = {
  validatorAddr: "",
};

const baseQueryValidatorDelegationsResponse: object = {
};

const baseQueryValidatorUnbondingDelegationsRequest: object = {
  validatorAddr: "",
};

const baseQueryValidatorUnbondingDelegationsResponse: object = {
};

const baseQueryDelegationRequest: object = {
  delegatorAddr: "",
  validatorAddr: "",
};

const baseQueryDelegationResponse: object = {
};

const baseQueryUnbondingDelegationRequest: object = {
  delegatorAddr: "",
  validatorAddr: "",
};

const baseQueryUnbondingDelegationResponse: object = {
};

const baseQueryDelegatorDelegationsRequest: object = {
  delegatorAddr: "",
};

const baseQueryDelegatorDelegationsResponse: object = {
};

const baseQueryDelegatorUnbondingDelegationsRequest: object = {
  delegatorAddr: "",
};

const baseQueryDelegatorUnbondingDelegationsResponse: object = {
};

const baseQueryRedelegationsRequest: object = {
  delegatorAddr: "",
  srcValidatorAddr: "",
  dstValidatorAddr: "",
};

const baseQueryRedelegationsResponse: object = {
};

const baseQueryDelegatorValidatorsRequest: object = {
  delegatorAddr: "",
};

const baseQueryDelegatorValidatorsResponse: object = {
};

const baseQueryDelegatorValidatorRequest: object = {
  delegatorAddr: "",
  validatorAddr: "",
};

const baseQueryDelegatorValidatorResponse: object = {
};

const baseQueryHistoricalInfoRequest: object = {
  height: 0,
};

const baseQueryHistoricalInfoResponse: object = {
};

const baseQueryPoolRequest: object = {
};

const baseQueryPoolResponse: object = {
};

const baseQueryParamsRequest: object = {
};

const baseQueryParamsResponse: object = {
};

/**
 *  Query defines the gRPC querier service.
 */
export interface Query {

  /**
   *  Validators queries all validators that match the given status.
   */
  Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;

  /**
   *  Validator queries validator info for given validator address.
   */
  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;

  /**
   *  ValidatorDelegations queries delegate info for given validator.
   */
  ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;

  /**
   *  ValidatorUnbondingDelegations queries unbonding delegations of a validator.
   */
  ValidatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;

  /**
   *  Delegation queries delegate info for given validator delegator pair.
   */
  Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;

  /**
   *  UnbondingDelegation queries unbonding info for given validator delegator
   *  pair.
   */
  UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;

  /**
   *  DelegatorDelegations queries all delegations of a given delegator address.
   */
  DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;

  /**
   *  DelegatorUnbondingDelegations queries all unbonding delegations of a given
   *  delegator address.
   */
  DelegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;

  /**
   *  Redelegations queries redelegations of given address.
   */
  Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;

  /**
   *  DelegatorValidators queries all validators info for given delegator
   *  address.
   */
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;

  /**
   *  DelegatorValidator queries validator info for given delegator validator
   *  pair.
   */
  DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;

  /**
   *  HistoricalInfo queries the historical info for given height.
   */
  HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;

  /**
   *  Pool queries the pool info.
   */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;

  /**
   *  Parameters queries the staking parameters.
   */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;

}

export class QueryClientImpl implements Query {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then(data => QueryValidatorsResponse.decode(new Reader(data)));
  }

  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then(data => QueryValidatorResponse.decode(new Reader(data)));
  }

  ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then(data => QueryValidatorDelegationsResponse.decode(new Reader(data)));
  }

  ValidatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse> {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then(data => QueryValidatorUnbondingDelegationsResponse.decode(new Reader(data)));
  }

  Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse> {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then(data => QueryDelegationResponse.decode(new Reader(data)));
  }

  UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then(data => QueryUnbondingDelegationResponse.decode(new Reader(data)));
  }

  DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then(data => QueryDelegatorDelegationsResponse.decode(new Reader(data)));
  }

  DelegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then(data => QueryDelegatorUnbondingDelegationsResponse.decode(new Reader(data)));
  }

  Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then(data => QueryRedelegationsResponse.decode(new Reader(data)));
  }

  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new Reader(data)));
  }

  DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then(data => QueryDelegatorValidatorResponse.decode(new Reader(data)));
  }

  HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then(data => QueryHistoricalInfoResponse.decode(new Reader(data)));
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

function longToNumber(long: Long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

export const protobufPackage = 'cosmos.staking.v1beta1'

export const QueryValidatorsRequest = {
  encode(message: QueryValidatorsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.status);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorsRequest } as QueryValidatorsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorsRequest {
    const message = { ...baseQueryValidatorsRequest } as QueryValidatorsRequest;
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorsRequest>): QueryValidatorsRequest {
    const message = { ...baseQueryValidatorsRequest } as QueryValidatorsRequest;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryValidatorsResponse = {
  encode(message: QueryValidatorsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorsResponse } as QueryValidatorsResponse;
    message.validators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorsResponse {
    const message = { ...baseQueryValidatorsResponse } as QueryValidatorsResponse;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = { ...baseQueryValidatorsResponse } as QueryValidatorsResponse;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryValidatorRequest = {
  encode(message: QueryValidatorRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.validatorAddr);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorRequest } as QueryValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorRequest {
    const message = { ...baseQueryValidatorRequest } as QueryValidatorRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorRequest>): QueryValidatorRequest {
    const message = { ...baseQueryValidatorRequest } as QueryValidatorRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
  toJSON(message: QueryValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
};

export const QueryValidatorResponse = {
  encode(message: QueryValidatorResponse, writer: Writer = Writer.create()): Writer {
    if (message.validator !== undefined && message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorResponse } as QueryValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorResponse {
    const message = { ...baseQueryValidatorResponse } as QueryValidatorResponse;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorResponse>): QueryValidatorResponse {
    const message = { ...baseQueryValidatorResponse } as QueryValidatorResponse;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },
};

export const QueryValidatorDelegationsRequest = {
  encode(message: QueryValidatorDelegationsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.validatorAddr);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorDelegationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorDelegationsRequest } as QueryValidatorDelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorDelegationsRequest {
    const message = { ...baseQueryValidatorDelegationsRequest } as QueryValidatorDelegationsRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest {
    const message = { ...baseQueryValidatorDelegationsRequest } as QueryValidatorDelegationsRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryValidatorDelegationsResponse = {
  encode(message: QueryValidatorDelegationsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorDelegationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorDelegationsResponse } as QueryValidatorDelegationsResponse;
    message.delegationResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorDelegationsResponse {
    const message = { ...baseQueryValidatorDelegationsResponse } as QueryValidatorDelegationsResponse;
    message.delegationResponses = [];
    if (object.delegationResponses !== undefined && object.delegationResponses !== null) {
      for (const e of object.delegationResponses) {
        message.delegationResponses.push(DelegationResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse {
    const message = { ...baseQueryValidatorDelegationsResponse } as QueryValidatorDelegationsResponse;
    message.delegationResponses = [];
    if (object.delegationResponses !== undefined && object.delegationResponses !== null) {
      for (const e of object.delegationResponses) {
        message.delegationResponses.push(DelegationResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryValidatorUnbondingDelegationsRequest = {
  encode(message: QueryValidatorUnbondingDelegationsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.validatorAddr);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorUnbondingDelegationsRequest } as QueryValidatorUnbondingDelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
    const message = { ...baseQueryValidatorUnbondingDelegationsRequest } as QueryValidatorUnbondingDelegationsRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest {
    const message = { ...baseQueryValidatorUnbondingDelegationsRequest } as QueryValidatorUnbondingDelegationsRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryValidatorUnbondingDelegationsResponse = {
  encode(message: QueryValidatorUnbondingDelegationsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryValidatorUnbondingDelegationsResponse } as QueryValidatorUnbondingDelegationsResponse;
    message.unbondingResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
    const message = { ...baseQueryValidatorUnbondingDelegationsResponse } as QueryValidatorUnbondingDelegationsResponse;
    message.unbondingResponses = [];
    if (object.unbondingResponses !== undefined && object.unbondingResponses !== null) {
      for (const e of object.unbondingResponses) {
        message.unbondingResponses.push(UnbondingDelegation.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse {
    const message = { ...baseQueryValidatorUnbondingDelegationsResponse } as QueryValidatorUnbondingDelegationsResponse;
    message.unbondingResponses = [];
    if (object.unbondingResponses !== undefined && object.unbondingResponses !== null) {
      for (const e of object.unbondingResponses) {
        message.unbondingResponses.push(UnbondingDelegation.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryDelegationRequest = {
  encode(message: QueryDelegationRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddr);
    writer.uint32(18).string(message.validatorAddr);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationRequest } as QueryDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRequest {
    const message = { ...baseQueryDelegationRequest } as QueryDelegationRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegationRequest>): QueryDelegationRequest {
    const message = { ...baseQueryDelegationRequest } as QueryDelegationRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
  toJSON(message: QueryDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
};

export const QueryDelegationResponse = {
  encode(message: QueryDelegationResponse, writer: Writer = Writer.create()): Writer {
    if (message.delegationResponse !== undefined && message.delegationResponse !== undefined) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegationResponse } as QueryDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationResponse {
    const message = { ...baseQueryDelegationResponse } as QueryDelegationResponse;
    if (object.delegationResponse !== undefined && object.delegationResponse !== null) {
      message.delegationResponse = DelegationResponse.fromJSON(object.delegationResponse);
    } else {
      message.delegationResponse = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegationResponse>): QueryDelegationResponse {
    const message = { ...baseQueryDelegationResponse } as QueryDelegationResponse;
    if (object.delegationResponse !== undefined && object.delegationResponse !== null) {
      message.delegationResponse = DelegationResponse.fromPartial(object.delegationResponse);
    } else {
      message.delegationResponse = undefined;
    }
    return message;
  },
  toJSON(message: QueryDelegationResponse): unknown {
    const obj: any = {};
    message.delegationResponse !== undefined && (obj.delegationResponse = message.delegationResponse ? DelegationResponse.toJSON(message.delegationResponse) : undefined);
    return obj;
  },
};

export const QueryUnbondingDelegationRequest = {
  encode(message: QueryUnbondingDelegationRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddr);
    writer.uint32(18).string(message.validatorAddr);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryUnbondingDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUnbondingDelegationRequest } as QueryUnbondingDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingDelegationRequest {
    const message = { ...baseQueryUnbondingDelegationRequest } as QueryUnbondingDelegationRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest {
    const message = { ...baseQueryUnbondingDelegationRequest } as QueryUnbondingDelegationRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
  toJSON(message: QueryUnbondingDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
};

export const QueryUnbondingDelegationResponse = {
  encode(message: QueryUnbondingDelegationResponse, writer: Writer = Writer.create()): Writer {
    if (message.unbond !== undefined && message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryUnbondingDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryUnbondingDelegationResponse } as QueryUnbondingDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingDelegationResponse {
    const message = { ...baseQueryUnbondingDelegationResponse } as QueryUnbondingDelegationResponse;
    if (object.unbond !== undefined && object.unbond !== null) {
      message.unbond = UnbondingDelegation.fromJSON(object.unbond);
    } else {
      message.unbond = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse {
    const message = { ...baseQueryUnbondingDelegationResponse } as QueryUnbondingDelegationResponse;
    if (object.unbond !== undefined && object.unbond !== null) {
      message.unbond = UnbondingDelegation.fromPartial(object.unbond);
    } else {
      message.unbond = undefined;
    }
    return message;
  },
  toJSON(message: QueryUnbondingDelegationResponse): unknown {
    const obj: any = {};
    message.unbond !== undefined && (obj.unbond = message.unbond ? UnbondingDelegation.toJSON(message.unbond) : undefined);
    return obj;
  },
};

export const QueryDelegatorDelegationsRequest = {
  encode(message: QueryDelegatorDelegationsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddr);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorDelegationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorDelegationsRequest } as QueryDelegatorDelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorDelegationsRequest {
    const message = { ...baseQueryDelegatorDelegationsRequest } as QueryDelegatorDelegationsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest {
    const message = { ...baseQueryDelegatorDelegationsRequest } as QueryDelegatorDelegationsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryDelegatorDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryDelegatorDelegationsResponse = {
  encode(message: QueryDelegatorDelegationsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorDelegationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorDelegationsResponse } as QueryDelegatorDelegationsResponse;
    message.delegationResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorDelegationsResponse {
    const message = { ...baseQueryDelegatorDelegationsResponse } as QueryDelegatorDelegationsResponse;
    message.delegationResponses = [];
    if (object.delegationResponses !== undefined && object.delegationResponses !== null) {
      for (const e of object.delegationResponses) {
        message.delegationResponses.push(DelegationResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse {
    const message = { ...baseQueryDelegatorDelegationsResponse } as QueryDelegatorDelegationsResponse;
    message.delegationResponses = [];
    if (object.delegationResponses !== undefined && object.delegationResponses !== null) {
      for (const e of object.delegationResponses) {
        message.delegationResponses.push(DelegationResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryDelegatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map(e => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryDelegatorUnbondingDelegationsRequest = {
  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddr);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorUnbondingDelegationsRequest } as QueryDelegatorUnbondingDelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest {
    const message = { ...baseQueryDelegatorUnbondingDelegationsRequest } as QueryDelegatorUnbondingDelegationsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest {
    const message = { ...baseQueryDelegatorUnbondingDelegationsRequest } as QueryDelegatorUnbondingDelegationsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryDelegatorUnbondingDelegationsResponse = {
  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorUnbondingDelegationsResponse } as QueryDelegatorUnbondingDelegationsResponse;
    message.unbondingResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse {
    const message = { ...baseQueryDelegatorUnbondingDelegationsResponse } as QueryDelegatorUnbondingDelegationsResponse;
    message.unbondingResponses = [];
    if (object.unbondingResponses !== undefined && object.unbondingResponses !== null) {
      for (const e of object.unbondingResponses) {
        message.unbondingResponses.push(UnbondingDelegation.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse {
    const message = { ...baseQueryDelegatorUnbondingDelegationsResponse } as QueryDelegatorUnbondingDelegationsResponse;
    message.unbondingResponses = [];
    if (object.unbondingResponses !== undefined && object.unbondingResponses !== null) {
      for (const e of object.unbondingResponses) {
        message.unbondingResponses.push(UnbondingDelegation.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map(e => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryRedelegationsRequest = {
  encode(message: QueryRedelegationsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddr);
    writer.uint32(18).string(message.srcValidatorAddr);
    writer.uint32(26).string(message.dstValidatorAddr);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryRedelegationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRedelegationsRequest } as QueryRedelegationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.srcValidatorAddr = reader.string();
          break;
        case 3:
          message.dstValidatorAddr = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRedelegationsRequest {
    const message = { ...baseQueryRedelegationsRequest } as QueryRedelegationsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.srcValidatorAddr !== undefined && object.srcValidatorAddr !== null) {
      message.srcValidatorAddr = String(object.srcValidatorAddr);
    } else {
      message.srcValidatorAddr = "";
    }
    if (object.dstValidatorAddr !== undefined && object.dstValidatorAddr !== null) {
      message.dstValidatorAddr = String(object.dstValidatorAddr);
    } else {
      message.dstValidatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRedelegationsRequest>): QueryRedelegationsRequest {
    const message = { ...baseQueryRedelegationsRequest } as QueryRedelegationsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.srcValidatorAddr !== undefined && object.srcValidatorAddr !== null) {
      message.srcValidatorAddr = object.srcValidatorAddr;
    } else {
      message.srcValidatorAddr = "";
    }
    if (object.dstValidatorAddr !== undefined && object.dstValidatorAddr !== null) {
      message.dstValidatorAddr = object.dstValidatorAddr;
    } else {
      message.dstValidatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryRedelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.srcValidatorAddr !== undefined && (obj.srcValidatorAddr = message.srcValidatorAddr);
    message.dstValidatorAddr !== undefined && (obj.dstValidatorAddr = message.dstValidatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryRedelegationsResponse = {
  encode(message: QueryRedelegationsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryRedelegationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryRedelegationsResponse } as QueryRedelegationsResponse;
    message.redelegationResponses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRedelegationsResponse {
    const message = { ...baseQueryRedelegationsResponse } as QueryRedelegationsResponse;
    message.redelegationResponses = [];
    if (object.redelegationResponses !== undefined && object.redelegationResponses !== null) {
      for (const e of object.redelegationResponses) {
        message.redelegationResponses.push(RedelegationResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRedelegationsResponse>): QueryRedelegationsResponse {
    const message = { ...baseQueryRedelegationsResponse } as QueryRedelegationsResponse;
    message.redelegationResponses = [];
    if (object.redelegationResponses !== undefined && object.redelegationResponses !== null) {
      for (const e of object.redelegationResponses) {
        message.redelegationResponses.push(RedelegationResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryRedelegationsResponse): unknown {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegationResponses = message.redelegationResponses.map(e => e ? RedelegationResponse.toJSON(e) : undefined);
    } else {
      obj.redelegationResponses = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddr);
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorValidatorsRequest } as QueryDelegatorValidatorsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    const message = { ...baseQueryDelegatorValidatorsRequest } as QueryDelegatorValidatorsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = { ...baseQueryDelegatorValidatorsRequest } as QueryDelegatorValidatorsRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined && message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorValidatorsResponse } as QueryDelegatorValidatorsResponse;
    message.validators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    const message = { ...baseQueryDelegatorValidatorsResponse } as QueryDelegatorValidatorsResponse;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = { ...baseQueryDelegatorValidatorsResponse } as QueryDelegatorValidatorsResponse;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
};

export const QueryDelegatorValidatorRequest = {
  encode(message: QueryDelegatorValidatorRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddr);
    writer.uint32(18).string(message.validatorAddr);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorValidatorRequest } as QueryDelegatorValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddr = reader.string();
          break;
        case 2:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorRequest {
    const message = { ...baseQueryDelegatorValidatorRequest } as QueryDelegatorValidatorRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = String(object.delegatorAddr);
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest {
    const message = { ...baseQueryDelegatorValidatorRequest } as QueryDelegatorValidatorRequest;
    if (object.delegatorAddr !== undefined && object.delegatorAddr !== null) {
      message.delegatorAddr = object.delegatorAddr;
    } else {
      message.delegatorAddr = "";
    }
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
  toJSON(message: QueryDelegatorValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
};

export const QueryDelegatorValidatorResponse = {
  encode(message: QueryDelegatorValidatorResponse, writer: Writer = Writer.create()): Writer {
    if (message.validator !== undefined && message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryDelegatorValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDelegatorValidatorResponse } as QueryDelegatorValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorResponse {
    const message = { ...baseQueryDelegatorValidatorResponse } as QueryDelegatorValidatorResponse;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse {
    const message = { ...baseQueryDelegatorValidatorResponse } as QueryDelegatorValidatorResponse;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }
    return message;
  },
  toJSON(message: QueryDelegatorValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },
};

export const QueryHistoricalInfoRequest = {
  encode(message: QueryHistoricalInfoRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int64(message.height);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryHistoricalInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryHistoricalInfoRequest } as QueryHistoricalInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalInfoRequest {
    const message = { ...baseQueryHistoricalInfoRequest } as QueryHistoricalInfoRequest;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest {
    const message = { ...baseQueryHistoricalInfoRequest } as QueryHistoricalInfoRequest;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
  toJSON(message: QueryHistoricalInfoRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },
};

export const QueryHistoricalInfoResponse = {
  encode(message: QueryHistoricalInfoResponse, writer: Writer = Writer.create()): Writer {
    if (message.hist !== undefined && message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryHistoricalInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryHistoricalInfoResponse } as QueryHistoricalInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHistoricalInfoResponse {
    const message = { ...baseQueryHistoricalInfoResponse } as QueryHistoricalInfoResponse;
    if (object.hist !== undefined && object.hist !== null) {
      message.hist = HistoricalInfo.fromJSON(object.hist);
    } else {
      message.hist = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse {
    const message = { ...baseQueryHistoricalInfoResponse } as QueryHistoricalInfoResponse;
    if (object.hist !== undefined && object.hist !== null) {
      message.hist = HistoricalInfo.fromPartial(object.hist);
    } else {
      message.hist = undefined;
    }
    return message;
  },
  toJSON(message: QueryHistoricalInfoResponse): unknown {
    const obj: any = {};
    message.hist !== undefined && (obj.hist = message.hist ? HistoricalInfo.toJSON(message.hist) : undefined);
    return obj;
  },
};

export const QueryPoolRequest = {
  encode(_: QueryPoolRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolRequest } as QueryPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryPoolRequest {
    const message = { ...baseQueryPoolRequest } as QueryPoolRequest;
    return message;
  },
  fromPartial(_: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
    const message = { ...baseQueryPoolRequest } as QueryPoolRequest;
    return message;
  },
  toJSON(_: QueryPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: Writer = Writer.create()): Writer {
    if (message.pool !== undefined && message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPoolResponse } as QueryPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPoolResponse {
    const message = { ...baseQueryPoolResponse } as QueryPoolResponse;
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromJSON(object.pool);
    } else {
      message.pool = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
    const message = { ...baseQueryPoolResponse } as QueryPoolResponse;
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromPartial(object.pool);
    } else {
      message.pool = undefined;
    }
    return message;
  },
  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined && message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
};

if (util.Long !== Long as any) {
  util.Long = Long as any;
  configure();
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;