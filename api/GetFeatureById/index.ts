import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
  context.log('Get feature by name');

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: context.bindings.feature[0],
  };
};

export default httpTrigger;
