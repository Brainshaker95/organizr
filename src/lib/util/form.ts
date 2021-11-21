// this action (https://svelte.dev/tutorial/actions) allows us to
// progressively enhance a <form> that already works without JS
export function enhance(
  form: HTMLFormElement,
  {
    pending,
    error,
    result,
  }: {
    pending?: (data: FormData, form: HTMLFormElement) => void;
    error?: (res: Response, error: Error, form: HTMLFormElement) => void;
    result: (res: Response, form: HTMLFormElement) => void;
  },
): { destroy: () => void } {
  let currentToken: unknown;

  async function handleSubmit(event: Event) {
    currentToken = {};

    const token = currentToken;
    const body = new FormData(form);

    event.preventDefault();

    if (pending) {
      pending(body, form);
    }

    try {
      const res = await fetch(form.action, {
        method: form.method,
        headers: {
          accept: 'application/json',
        },
        body,
      });

      if (token !== currentToken) {
        return;
      }

      if (res.ok) {
        result(res, form);
      } else if (error) {
        error(res, null, form);
      } else {
        console.error(await res.text());
      }
    } catch (e) {
      if (error) {
        error(null, e, form);
      } else {
        throw e;
      }
    }
  }

  form.addEventListener('submit', handleSubmit);

  return {
    destroy: (): void => {
      form.removeEventListener('submit', handleSubmit);
    },
  };
}

export default enhance;
