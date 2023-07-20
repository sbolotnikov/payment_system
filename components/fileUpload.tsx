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
        (uri: any) => {
          resolve(uri);
        },
        'file'
      );
    });

  return (
      <div>
        <input
          type="file"
          id="fileInput"
          hidden
          onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
            try {
              const image = (await resizeFile(
                e.currentTarget.files![0]
              )) as any;
              let filename = uuidv4() + '.jpg';
              console.log(image);
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
            } catch (err) {
              console.log(err);
            }
          }}
        />
      <button className="w-1/2 btnFancy" onClick={(e)=>document.getElementById("fileInput")!.click()}>
        Upload Avatar
      </button>
      </div>
  );
}
