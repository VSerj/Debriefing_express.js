import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve('server/static', fileName);
      console.log(filePath);
      file.mv(filePath);
      return fileName;
    } catch {
      console.log(err);
    }
  }
}

export default new FileService();
