

This codemod will replace the usages of `useFormState()` to use `useActionState()`, introduced in React v19.

## Example
### Before:

```ts
import { useFormState } from "react-dom";

async function increment(previousState, formData) {
  return previousState + 1;
}

function StatefulForm({}) {
  const [state, formAction] = useFormState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  )
}
```

### After:

```ts
import { useActionState } from "react";

async function increment(previousState, formData) {
  return previousState + 1;
}

function StatefulForm({}) {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  )
}
```

### Before:

```ts
import * as ReactDOM from "react-dom";

function StatefulForm({}) {
  const [state, formAction] = ReactDOM.useFormState(increment, 0);
  return <form></form>;
}
```

### After:

```ts
import { useActionState } from "react";

function StatefulForm({}) {
  const [state, formAction] = useActionState(increment, 0);
  return <form></form>;
}
```

