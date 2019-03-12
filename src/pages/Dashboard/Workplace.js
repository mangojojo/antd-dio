import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import Link from 'umi/link';
import { Row, Col, Card, List, Avatar } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './Workplace.less';

@connect(({ user, project, activities, chart, loading }) => ({
  currentUser: user.currentUser,
  currentUserLoading: loading.effects['user/fetchCurrent'],
}))
export default class Workplace extends PureComponent {
  componentDidMount() {}

  render() {
    const { currentUser, currentUserLoading } = this.props;

    const pageHeaderContent =
      currentUser && Object.keys(currentUser).length ? (
        <div className={styles.pageHeaderContent}>
          <div className={styles.avatar}>
            <Avatar size="large" src={currentUser.avatar} />
          </div>
          <div className={styles.content}>
            <div className={styles.contentTitle}>
              早安，
              {currentUser.name}
              ，祝你开心每一天！
            </div>
            <div>
              {currentUser.title} |{currentUser.group}
            </div>
          </div>
        </div>
      ) : null;

    return (
      <PageHeaderWrapper loading={currentUserLoading} content={pageHeaderContent}>
        <Row gutter={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <Card
              className={styles.projectList}
              style={{ marginBottom: 24 }}
              title="首页要展示的内容"
              bordered={false}
              loading={false}
              bodyStyle={{ padding: 0, minHeight: 500 }}
            />
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}
