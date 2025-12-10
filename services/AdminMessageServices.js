import UserInstance from "@/lib/userAxios"
export const UnReadMessage  =async (page = 1) => {
  const response = await UserInstance.get(`/admin/messages/unread?page=${page}`)
  console.log('services log message', response);
  
  return response.data;
}

export const ReadMessage  = async (page = 1) => {
  const response = await UserInstance.get(`/admin/messages?page=${page}`)
  console.log('services log message two', response);
  
  return response.data;
}

export const MessageStatusUpdateServices = async (id,data) => {
  console.log('services status update',id);
  
  const response = await UserInstance.put(`/admin/messages/${id}/read`,data)
  console.log('services log message status update', response);
  return response;
}

export const MessageDeleteServices = async (id) => {
  const response = await UserInstance.delete(`/admin/messages/${id}`)
  console.log('services log message delete', response);
  return response;
}

export const MessageSingleServices = async (id) =>{
  const response = await UserInstance.get(`/admin/messages/${id}`)
  console.log('services log single message', response);
  return response;
}

export const postSendMessageServices = async (data) => {
  const response = await UserInstance.post('/property/contact',data);
  return response;
}
