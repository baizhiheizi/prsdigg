import LoadingComponent from '@application/components/LoadingComponent/LoadingComponent';
import { Article, useTaggedArticleConnectionQuery } from '@graphql';
import { Button, Card, List, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import ArticleListItemComponent from '../../components/ArticleListItemComponent/ArticleListItemComponent';
import LoadMoreComponent from '../../components/LoadMoreComponent/LoadMoreComponent';

export default function TagPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { loading, data, fetchMore } = useTaggedArticleConnectionQuery({
    variables: { tagId: id, order: 'lately' },
  });

  if (loading) {
    return <LoadingComponent />;
  }

  const {
    tag,
    articleConnection: {
      nodes: articles,
      pageInfo: { hasNextPage, endCursor },
    },
  } = data;
  return (
    <div>
      <Card
        style={{
          borderTop: `3px solid ${tag.color}`,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <div>
          <Typography.Title level={5}>#{tag.name}</Typography.Title>
        </div>
        <div>
          <Typography.Text type='secondary'>
            {t('tag.articlesCount')} {tag.articlesCount}
          </Typography.Text>
        </div>
      </Card>
      <List
        size='large'
        itemLayout='vertical'
        dataSource={articles}
        loadMore={
          <LoadMoreComponent
            hasNextPage={hasNextPage}
            loading={loading}
            fetchMore={() => {
              fetchMore({
                variables: {
                  after: endCursor,
                  order: 'lately',
                },
              });
            }}
          />
        }
        renderItem={(article: Partial<Article>) => (
          <ArticleListItemComponent article={article} />
        )}
      />
    </div>
  );
}
