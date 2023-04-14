import { ConnectionHandler, RecordProxy } from "relay-runtime";

interface IDeleteEdgeOfData {
  record: RecordProxy<{}> | null | undefined;
  key: string;
  dataId: string | null | undefined;
}
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
export const insertEdgeToData = ({
  record,
  key,
  newEdge,
  options,
}: IInsertEdgeToData) => {
  if (!record) return;
  const connection = ConnectionHandler.getConnection(record, key, options);

  // 메모이징 활용을 위해 배열 맨 뒤에 엣지를 붙여야함
  if (connection) ConnectionHandler.insertEdgeBefore(connection, newEdge);
};
