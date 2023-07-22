import Image from 'next/image';
import { useState } from 'react';
import path from 'path';

var fs = require('fs');

export async function getServerSideProps(context) {
    const dirRelativeToPublicFolder = 'assets/photos/'
    const dir = path.resolve('./public', dirRelativeToPublicFolder);
    var files = fs.readdirSync(dir);

    return {
        props: {
            files
        }
    }
}

export default function Photos({ files }) {
    return (
      <>
        <div className="photos">
            {
                files.map(file => {
                    return (
                        <div className="photo">
                            <Image width={200} height={200} src={ `/assets/photos/${ file }` } objectFit="cover" />
                        </div>
                    );
                })
            }
        </div>
      </>
    )
  }