import { useState } from 'react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Textarea } from '@heroui/textarea';
import { Select } from '@heroui/select';
import { saveModule } from '@src/utils/storage';
import { Module } from '@src/types';
import { v4 as uuidv4 } from 'uuid';

export function ModuleEditor() {
  const [moduleName, setModuleName] = useState('');
  const [description, setDescription] = useState('');
  const [moduleType, setModuleType] = useState<'widget' | 'icon' | 'fullscreen'>('widget');
  const [code, setCode] = useState('');

  const handleSaveModule = async () => {
    if (!moduleName || !code) return;

    const newModule: Module = {
      id: uuidv4(),
      name: moduleName,
      description,
      author: 'You',
      version: '1.0.0',
      type: moduleType,
      thumbnail: '',
      isCustom: true,
      createdAt: Date.now(),
      code
    };

    await saveModule(newModule);
    alert('模块保存成功！');
    // 重置表单或关闭编辑器
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">创建自定义模块</h2>
      <div className="space-y-4">
        <Input
          label="模块名称"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          placeholder="输入模块名称"
        />
        <Textarea
          label="模块描述"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="输入模块描述"
        />
        <Select
          label="模块类型"
          value={moduleType}
          onValueChange={(value) => setModuleType(value as any)}
          options={[
            { value: 'widget', label: '小部件' },
            { value: 'icon', label: '图标应用' },
            { value: 'fullscreen', label: '全屏应用' }
          ]}
        />
        <Textarea
          label="模块代码"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="输入React组件代码"
          className="min-h-[300px]"
        />
        <Button onClick={handleSaveModule} className="w-full">
          保存模块
        </Button>
      </div>
    </div>
  );
}
