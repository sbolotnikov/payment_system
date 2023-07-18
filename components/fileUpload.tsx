import Resizer from 'react-image-file-resizer';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

interface fileUploadProps {
  getImgUrl: (val: string) => void;
}

export default function FileUpload(props: fileUploadProps) {
  const resizeFile = (file: any) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        'JPEG',
        100,
        0,
        (uri:any) => {
          resolve(uri);
        },
        'file'
      );
    });


  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <input
        type="file"
        id="fileInput"
        className="w-full border-0 m-2 rounded-md"
        onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();

            try {
              const image = await resizeFile(e.currentTarget.files![0]) as any;
              let filename = uuidv4() + '.jpg';
              console.log(image)
              const { error } = await supabase.storage
                .from('images')
                .upload(filename, image); 

              if (error) {
                console.log(error);
                alert('Error uploading file to Supabase');
              }
              props.getImgUrl(
                process.env.NEXT_PUBLIC_SUPABASE_URL +
                  '/storage/v1/object/public/images/' +
                  filename
              );
              console.log(
                process.env.NEXT_PUBLIC_SUPABASE_URL! +
                  '/storage/v1/object/public/images/' +
                  filename
              );
            } catch (err) {
              console.log(err);
            }
          }
        }
      />
      {/* <div
        className="w-full m-3 p-1 text-sm border text-center rounded-lg navbar__item"
        onClick={(e) => {
          e.preventDefault();
          pictureUpload();
        }}
      >
        Сохранить
      </div> */}
    </div>
  );
}
