import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { GetMeetingQuery } from "./__generated__/GetMeetingQuery.graphql";

const getMeetingQuery = graphql`
  query GetMeetingQuery($id: ID!, $skip: Boolean!) {
    getMeeting(input: { id: $id }) @skip(if: $skip) {
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
    skip: !meetingId,
    id: meetingId,
  });

  if (meetingId && !getMeeting?.ok) {
    alert(getMeeting?.error);
  }

  return { meeting: getMeeting?.meeting };
};
