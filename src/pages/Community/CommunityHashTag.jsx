import * as C from './CommunityStyle';
import React from 'react';

export default function CommunityHashTag({ hashTagItems }) {
  return (
    <C.CommunityTextList>
      <C.CommunityTextListItem>{hashTagItems}</C.CommunityTextListItem>
    </C.CommunityTextList>
  );
}
