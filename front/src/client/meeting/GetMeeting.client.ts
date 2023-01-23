import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetMeetingQuery } from "./__generated__/GetMeetingQuery.graphql";

const getMeetingQuery = graphql`
  query GetMeetingQuery($id: ID!) {
    getMeeting(input: { id: $id }) {
      ok
      error
      meeting {
        id
        title
        startTime
        endTime
        attendees {
          id
          name
        }
        host {
          id
          name
        }
      }
    }
  }
`;

export const useGetMeeting = (meetingId: string) => {
  const { getMeeting } = useLazyLoadQuery<GetMeetingQuery>(getMeetingQuery, {
    id: meetingId,
  });

  return getMeeting;
};
