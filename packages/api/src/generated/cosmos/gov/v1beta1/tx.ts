/* eslint-disable */
import { Any } from '../../../google/protobuf/any';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import * as Long from 'long';
import { VoteOption, voteOptionFromJSON, voteOptionToJSON } from '../../../cosmos/gov/v1beta1/gov';
import { SigningStargateClient } from '@cosmjs/stargate';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 *  proposal Content.
 */
export interface MsgSubmitProposal {
  content?: Any;
  initialDeposit: Coin[];
  proposer: string;
}

/**
 *  MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.
 */
export interface MsgSubmitProposalResponse {
  proposalId: Long;
}

/**
 *  MsgVote defines a message to cast a vote.
 */
export interface MsgVote {
  proposalId: Long;
  voter: string;
  option: VoteOption;
}

/**
 *  MsgVoteResponse defines the Msg/Vote response type.
 */
export interface MsgVoteResponse {
}

/**
 *  MsgDeposit defines a message to submit a deposit to an existing proposal.
 */
export interface MsgDeposit {
  proposalId: Long;
  depositor: string;
  amount: Coin[];
}

/**
 *  MsgDepositResponse defines the Msg/Deposit response type.
 */
export interface MsgDepositResponse {
}

const baseMsgSubmitProposal: object = {
  proposer: "",
};

const baseMsgSubmitProposalResponse: object = {
  proposalId: Long.UZERO,
};

const baseMsgVote: object = {
  proposalId: Long.UZERO,
  voter: "",
  option: 0,
};

const baseMsgVoteResponse: object = {
};

const baseMsgDeposit: object = {
  proposalId: Long.UZERO,
  depositor: "",
};

const baseMsgDepositResponse: object = {
};

/**
 *  Msg defines the bank Msg service.
 */
export interface Msg {

  /**
   *  SubmitProposal defines a method to create new proposal given a content.
   */
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;

  /**
   *  Vote defines a method to add a vote on a specific proposal.
   */
  Vote(request: MsgVote): Promise<MsgVoteResponse>;

  /**
   *  Deposit defines a method to add deposit on a specific proposal.
   */
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;

}

export class MsgClientImpl implements Msg {

  private readonly signingClient: SigningStargateClient;

  constructor(signingClient: SigningStargateClient) {
    this.signingClient = signingClient;
  }

  SubmitProposal(request: MsgSubmitProposal, callback?: function (response: MsgSubmitProposalResponse): void | Promise<void>): void {
    const data = MsgSubmitProposal.encode(request).finish();
    this.signingClient.addMsg({
      typeUrl: "cosmos.gov.v1beta1.Msg/SubmitProposal",
      value: data
    }, callback);
  }

  Vote(request: MsgVote, callback?: function (response: MsgVoteResponse): void | Promise<void>): void {
    const data = MsgVote.encode(request).finish();
    this.signingClient.addMsg({
      typeUrl: "cosmos.gov.v1beta1.Msg/Vote",
      value: data
    }, callback);
  }

  Deposit(request: MsgDeposit, callback?: function (response: MsgDepositResponse): void | Promise<void>): void {
    const data = MsgDeposit.encode(request).finish();
    this.signingClient.addMsg({
      typeUrl: "cosmos.gov.v1beta1.Msg/Deposit",
      value: data
    }, callback);
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'cosmos.gov.v1beta1'

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: Writer = Writer.create()): Writer {
    if (message.content !== undefined && message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).string(message.proposer);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSubmitProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal;
    message.initialDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposal {
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal;
    message.initialDeposit = [];
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromJSON(object.content);
    } else {
      message.content = undefined;
    }
    if (object.initialDeposit !== undefined && object.initialDeposit !== null) {
      for (const e of object.initialDeposit) {
        message.initialDeposit.push(Coin.fromJSON(e));
      }
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = String(object.proposer);
    } else {
      message.proposer = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal;
    message.initialDeposit = [];
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromPartial(object.content);
    } else {
      message.content = undefined;
    }
    if (object.initialDeposit !== undefined && object.initialDeposit !== null) {
      for (const e of object.initialDeposit) {
        message.initialDeposit.push(Coin.fromPartial(e));
      }
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    } else {
      message.proposer = "";
    }
    return message;
  },
  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initialDeposit = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer);
    return obj;
  },
};

export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.proposalId);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitProposalResponse } as MsgSubmitProposalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposalResponse {
    const message = { ...baseMsgSubmitProposalResponse } as MsgSubmitProposalResponse;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = { ...baseMsgSubmitProposalResponse } as MsgSubmitProposalResponse;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },
  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },
};

export const MsgVote = {
  encode(message: MsgVote, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.proposalId);
    writer.uint32(18).string(message.voter);
    writer.uint32(24).int32(message.option);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVote } as MsgVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVote {
    const message = { ...baseMsgVote } as MsgVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = voteOptionFromJSON(object.option);
    } else {
      message.option = 0;
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = { ...baseMsgVote } as MsgVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    } else {
      message.option = 0;
    }
    return message;
  },
  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    return obj;
  },
};

export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
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
  fromJSON(_: any): MsgVoteResponse {
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
    return message;
  },
  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).uint64(message.proposalId);
    writer.uint32(18).string(message.depositor);
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeposit } as MsgDeposit;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeposit {
    const message = { ...baseMsgDeposit } as MsgDeposit;
    message.amount = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor);
    } else {
      message.depositor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = { ...baseMsgDeposit } as MsgDeposit;
    message.amount = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    } else {
      message.depositor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
};

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
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
  fromJSON(_: any): MsgDepositResponse {
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
    return message;
  },
  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

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