import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
  const name = req.body.name;
  const title = req.body.title;
  const remoteUrl = req.body.remoteUrl;

  if (name && title && remoteUrl) {
    context.bindings.outputDocument = req.body;
    context.res = {
      body: { result: 'success' },
    };
  } else {
    context.res = {
      status: 400,
      body: { result: 'Error, required fields must be complete' },
    };
  }
};

export default httpTrigger;
