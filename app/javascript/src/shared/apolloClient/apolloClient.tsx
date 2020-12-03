import { ApolloClient, InMemoryCache } from '@apollo/client';

const customizedConnectionMergeFunction = (
  keyArgs: false | string[] = false,
): {
  keyArgs: any;
  merge: (existing: any, incoming: any) => any;
} => {
  return {
    keyArgs,
    merge(existing: any, incoming: any) {
      const nodes = existing ? [...existing.nodes] : [];
      return {
        ...incoming,
        nodes: [...nodes, ...incoming.nodes],
      };
    },
  };
};

export const apolloClient = (uri: string, csrfToken?: string) => {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          adminAnnouncementConnection: customizedConnectionMergeFunction(),
          adminArticleConnection: customizedConnectionMergeFunction(),
          adminBonusConnection: customizedConnectionMergeFunction(),
          adminMixinMessageConnection: customizedConnectionMergeFunction(),
          adminMixinNetworkSnapshotConnection: customizedConnectionMergeFunction(
            ['filter', 'userId'],
          ),
          adminOrderConnection: customizedConnectionMergeFunction([
            'itemId',
            'itemType',
          ]),
          adminPaymentConnection: customizedConnectionMergeFunction(),
          adminSwapOrderConnection: customizedConnectionMergeFunction(),
          adminTransferConnection: customizedConnectionMergeFunction([
            'itemId',
            'itemType',
            'sourceId',
            'sourceType',
          ]),
          adminUserConnection: customizedConnectionMergeFunction([
            'query',
            'orderBy',
          ]),
          articleConnection: customizedConnectionMergeFunction([
            'order',
            'query',
          ]),
          commentConnection: customizedConnectionMergeFunction([
            'commentableId',
            'commentableType',
            'authorMixinId',
          ]),
          myTransferConnection: customizedConnectionMergeFunction(),
          myPaymentConnection: customizedConnectionMergeFunction(),
          myArticleConnection: customizedConnectionMergeFunction(['type']),
          userArticleConnection: customizedConnectionMergeFunction([
            'type',
            'mixinId',
          ]),
          transferConnection: customizedConnectionMergeFunction(),
        },
      },
    },
  });

  return new ApolloClient({
    uri,
    cache,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token':
        csrfToken ||
        ((document.querySelector("meta[name='csrf-token']") as any) || {})
          .content,
    },
  });
};
