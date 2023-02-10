import React from 'react';
import * as C from './CommunityStyle';

export default function CommunityHashTag({ hashTagItems }) {
  return (
    <C.CommunityTextList>
      <C.CommunityTextListItem>{hashTagItems}</C.CommunityTextListItem>
    </C.CommunityTextList>
  );
}
