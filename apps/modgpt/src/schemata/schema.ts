import {
  type LiteralSchema,
  array,
  literal,
  object,
  optional,
  parse,
  string,
  union,
} from "valibot";
import { engines, roles } from "../dev-utils/consts";

const engine = union(
  engines.map((role) => literal(role)) as LiteralSchema<string>[],
);
const role = union(
  roles.map((role) => literal(role)) as LiteralSchema<string>[],
);

export const sendChatBodySchema = object({
  messages: array(
    object({
      content: string(),
      role: union([literal("system"), literal("user"), literal("assistant")]),
      name: optional(string()),
    }),
  ),
  engine,
});

export const parseSendChatBody = (input: unknown) =>
  parse(sendChatBodySchema, input);
