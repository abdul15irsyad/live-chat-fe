import { IChat } from '@/hooks/use-chat-store';
import { randomInt } from '@/utils/number.util';
import { random } from '@/utils/random.util';
import dayjs from 'dayjs';

const names = ['LeBron James', 'Stephen Curry', 'Kyrie Irving'];
export const dummyChats: IChat[] = [...Array(20)]
  .map((): IChat => {
    const timestamp = dayjs()
      .subtract(randomInt(0, 1000), 'days')
      .subtract(randomInt(0, 10), 'hours')
      .toDate();
    return random<IChat>([
      {
        type: 'chat',
        name: random(names),
        message: random([
          'p',
          'Nothing wrong with that. Mobile games can be just as fun!',
          "Hey, I was just thinking about our last conversation and how we talked about different hobbies we have. It's interesting how people can have such diverse interests. For instance, I know people who are really into hiking, while others prefer indoor activities like reading or painting. I find myself somewhere in between. I love spending time outdoors, but I also enjoy reading a good book when I get the chance. Recently, I started reading this novel about space exploration, and it really got me thinking about the future of humanity. Imagine a time when we could travel to other planets! That would be incredible, right? Sometimes, I wonder if people from the past would even recognize our world today. The advancements we've made in technology are mind-blowing. Anyway, I'd love to hear your thoughts on this—do you think we’ll ever truly conquer space travel?",
          'Just finished work. Thinking of watching a movie tonight.',
        ]),
        isSend: random([true, false]),
        timestamp,
      },
      {
        type: 'badge',
        name: random(names),
        event: random(['joined', 'left']),
        timestamp,
      },
    ]);
  })
  .sort((a, b) => (dayjs(a.timestamp).isBefore(dayjs(b.timestamp)) ? -1 : 1));
