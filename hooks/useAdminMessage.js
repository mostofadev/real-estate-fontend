import {
    MessageDeleteServices,
    MessageSingleServices,
    MessageStatusUpdateServices,
  postSendMessageServices,
  ReadMessage,
  UnReadMessage,
} from "@/services/AdminMessageServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useAdminUnReadMessage = () => {
  const [page, setPage] = useState(1);
  const query = useQuery({
    queryKey: ["send-message", page],
    queryFn: () => UnReadMessage(page),
    keepPreviousData: true,
  });
  return { ...query, page, setPage };
};

export const useAdminReadMessage = () => {
  const [page, setPage] = useState(1);
  const query = useQuery({
    queryKey: ["send-message", page],
    queryFn: () => ReadMessage(page),
    keepPreviousData: true,
  });
  return { ...query, page, setPage };
};

export const useAdminMessageStatusUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, data}) => MessageStatusUpdateServices(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["send-message"]);
    },
    onError: () => {
      queryClient.setQueryData(["send-message"], (old) => {
        return old;
      });
    },
  });
};


export const useAdminMessageDelete = () => {
  const queryClient = useQueryClient();
    return useMutation({
    mutationFn: (id) => MessageDeleteServices(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["send-message"]);
    },
    onError: () => {
      queryClient.setQueryData(["send-message"], (old) => {
        return old;
        });
    },
  });
};

export const useAdminMessageSingle = (id) => {
  return useQuery({
    queryKey: ["send-message-single", id],
    queryFn: ({ queryKey }) => {
      const [_key, messageId] = queryKey;
      return MessageSingleServices(messageId);
    },
    enabled: !!id,
  });
}




export const usePostSendMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => postSendMessageServices(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["send-message"]);
    },
  });
};
