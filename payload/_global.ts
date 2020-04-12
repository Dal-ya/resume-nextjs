import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview_resize.png';
import { IGlobal } from '../component/common/IGlobal';

const title = 'resume';
const description = 'resume';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '쿠알라룸푸르가서 찍은 사진.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Yongwoo',
        lastName: 'Yu',
        username: 'luckyyowu',
        gender: 'male',
      },
    },
  },
};
