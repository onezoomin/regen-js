/* eslint-disable */
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Input, Output } from '../../../cosmos/bank/v1beta1/bank';
import { SigningStargateClient } from '@cosmjs/stargate';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  MsgSend represents a message to send coins from one account to another.
 */
export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}

/**
 *  MsgSendResponse defines the Msg/Send response type.
 */
export interface MsgSendResponse {
}

/**
 *  MsgMultiSend represents an arbitrary multi-in, multi-out send message.
 */
export interface MsgMultiSend {
  inputs: Input[];
  outputs: Output[];
}

/**
 *  MsgMultiSendResponse defines the Msg/MultiSend response type.
 */
export interface MsgMultiSendResponse {
}

const baseMsgSend: object = {
  fromAddress: "",
  toAddress: "",
};

const baseMsgSendResponse: object = {
};

const baseMsgMultiSend: object = {
};

const baseMsgMultiSendResponse: object = {
};

/**
 *  Msg defines the bank Msg service.
 */
export interface Msg {

  /**
   *  Send defines a method for sending coins from one account to another account.
   */
  Send(request: MsgSend): Promise<MsgSendResponse>;

  /**
   *  MultiSend defines a method for sending coins from some accounts to other accounts.
   */
  MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;

}

export class MsgClientImpl implements Msg {

  private readonly signingClient: SigningStargateClient;

  constructor(signingClient: SigningStargateClient) {
    this.signingClient = signingClient;
  }

  Send(request: MsgSend, callback?: function (response: MsgSendResponse): void | Promise<void>): void {
    const data = MsgSend.encode(request).finish();
    this.signingClient.addMsg({
      typeUrl: "cosmos.bank.v1beta1.Msg/Send",
      value: data
    }, callback);
  }

  MultiSend(request: MsgMultiSend, callback?: function (response: MsgMultiSendResponse): void | Promise<void>): void {
    const data = MsgMultiSend.encode(request).finish();
    this.signingClient.addMsg({
      typeUrl: "cosmos.bank.v1beta1.Msg/MultiSend",
      value: data
    }, callback);
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'cosmos.bank.v1beta1'

export const MsgSend = {
  encode(message: MsgSend, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.fromAddress);
    writer.uint32(18).string(message.toAddress);
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSend {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSend } as MsgSend;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
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
  fromJSON(object: any): MsgSend {
    const message = { ...baseMsgSend } as MsgSend;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSend>): MsgSend {
    const message = { ...baseMsgSend } as MsgSend;
    message.amount = [];
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
};

export const MsgSendResponse = {
  encode(_: MsgSendResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSendResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
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
  fromJSON(_: any): MsgSendResponse {
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse {
    const message = { ...baseMsgSendResponse } as MsgSendResponse;
    return message;
  },
  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgMultiSend = {
  encode(message: MsgMultiSend, writer: Writer = Writer.create()): Writer {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgMultiSend {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMultiSend } as MsgMultiSend;
    message.inputs = [];
    message.outputs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMultiSend {
    const message = { ...baseMsgMultiSend } as MsgMultiSend;
    message.inputs = [];
    message.outputs = [];
    if (object.inputs !== undefined && object.inputs !== null) {
      for (const e of object.inputs) {
        message.inputs.push(Input.fromJSON(e));
      }
    }
    if (object.outputs !== undefined && object.outputs !== null) {
      for (const e of object.outputs) {
        message.outputs.push(Output.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMultiSend>): MsgMultiSend {
    const message = { ...baseMsgMultiSend } as MsgMultiSend;
    message.inputs = [];
    message.outputs = [];
    if (object.inputs !== undefined && object.inputs !== null) {
      for (const e of object.inputs) {
        message.inputs.push(Input.fromPartial(e));
      }
    }
    if (object.outputs !== undefined && object.outputs !== null) {
      for (const e of object.outputs) {
        message.outputs.push(Output.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: MsgMultiSend): unknown {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map(e => e ? Input.toJSON(e) : undefined);
    } else {
      obj.inputs = [];
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? Output.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }
    return obj;
  },
};

export const MsgMultiSendResponse = {
  encode(_: MsgMultiSendResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgMultiSendResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
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
  fromJSON(_: any): MsgMultiSendResponse {
    const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgMultiSendResponse>): MsgMultiSendResponse {
    const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
    return message;
  },
  toJSON(_: MsgMultiSendResponse): unknown {
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