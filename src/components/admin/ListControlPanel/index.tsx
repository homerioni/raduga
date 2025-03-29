import { Dispatch, SetStateAction } from 'react';
import { Button, Flex, Input } from '@mantine/core';
import { IconEdit, IconPlus, IconSearch, IconTrash } from '@tabler/icons-react';

type TListControlPanelProps = {
  selectedLength: number;
  searchState: [string, Dispatch<SetStateAction<string>>];
  onAdd: () => void;
  onEdit: () => void;
  onDel: () => void;
};

export const ListControlPanel = ({
  selectedLength,
  searchState: [search, setSearch],
  onAdd,
  onEdit,
  onDel,
}: TListControlPanelProps) => (
  <Flex gap={10} style={{ position: 'sticky', top: 65, zIndex: 5 }}>
    <Button
      color="green"
      variant="light"
      onClick={onAdd}
      leftSection={<IconPlus size={20} stroke={1.5} />}
    >
      Добавить
    </Button>
    <Button
      variant="light"
      onClick={onEdit}
      disabled={selectedLength !== 1}
      leftSection={<IconEdit size={20} stroke={1.5} />}
    >
      Редактировать
    </Button>
    <Button
      variant="light"
      color="red"
      onClick={onDel}
      disabled={!selectedLength}
      leftSection={<IconTrash size={20} stroke={1.5} />}
    >
      Удалить
    </Button>
    <Input
      placeholder="Поиск"
      leftSection={<IconSearch size={20} />}
      w={300}
      radius={0}
      styles={{ input: { border: 'none', borderBottom: '1px solid var(--input-bd)' } }}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </Flex>
);
