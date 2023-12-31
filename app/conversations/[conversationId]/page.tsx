import getConversationById from "../../../actions/getConversationById";
import getMessages from "../../../actions/getMessages";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import EmptyState from "../../../components/Chat/EmptyState";

interface IParams {
  conversationId: string;
}

const ChatId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    )
  }

  return ( 
    <div className="lg:pl-[320px]">
      <div className="flex flex-col h-screen w-screen -ml-[10px] md:-ml-[22px] lg:absolute top-[128px] lg:w-[650px] lg:-ml-[0px] xl:w-[800px]">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
}

export default ChatId;