import { ConnectionHandler, RecordProxy } from "relay-runtime";

interface IDeleteEdgeOfData {
  record: RecordProxy<{}> | null | undefined;
  key: string;
  dataId: string | null | undefined;
}

// Relay Store의 pagination이 가능한 데이터 더미에서 특정 데이터를 삭제함
export const deleteEdgeOfData = ({
  record,
  key,
  dataId,
}: IDeleteEdgeOfData) => {
  if (!record) return;
  const connection = ConnectionHandler.getConnection(record, key);

  if (!connection || !dataId) return;
  ConnectionHandler.deleteNode(connection, dataId);
};

interface IInsertEdgeToData {
  record: RecordProxy<{}> | null | undefined;
  key: string;
  newEdge: RecordProxy<{}>;
  options?: any;
}

// Relay Store의 pagination이 가능한 데이터 더미 맨 끝에 특정 데이터를 추가함
export const insertEdgeToData = ({
  record,
  key,
  newEdge,
  options,
}: IInsertEdgeToData) => {
  if (!record) return;
  // connection을 가져옴
  // @connection을 걸어놓은 쿼리만 사용 가능하고 쿼리에서 그 인자로 줬던 key를 통해 찾는다.
  const connection = ConnectionHandler.getConnection(record, key, options);

  // 찾아낸 connection 끝에 새로운 데이터를 추가함
  // 메모이징 활용을 위해 배열 맨 뒤에 엣지를 붙여야함
  if (connection) ConnectionHandler.insertEdgeBefore(connection, newEdge);
};
