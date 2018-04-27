import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import hoistStatics from 'hoist-non-react-statics';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './environment';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#cfcfcf',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
});

const LoadingView = () => (
  <View style={styles.content}>
    <View style={styles.loading}>
      <ActivityIndicator />
    </View>
  </View>
);

type Config = {
  query: ?GraphQLTaggedNode,
  queriesParams?: ?(props: Object) => Object,
  variables?: Variables,
};

export default function createQueryRenderer(
  FragmentComponent: React.ComponentType<*>,
  Component: React.ComponentType<*>,
  config: Config,
): React.ComponentType<*> {
  const { query, queriesParams } = config;

  class QueryRendererWrapper extends React.Component<{}> {
    render() {
      const variables = queriesParams ? queriesParams(this.props) : config.variables;

      return (
        <QueryRenderer
          environment={environment}
          query={query}
          variables={variables}
          render={({ error, props, retry }) => {
            if (error) {
              return <View><Text>{error}</Text></View>;
            }

            if (props) {
              return <FragmentComponent {...this.props} {...props} />;
            }

            return <LoadingView />;
          }}
        />
      );
    }
  }

  return hoistStatics(QueryRendererWrapper, Component);
}
