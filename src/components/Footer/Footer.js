import React from 'react';
import * as F from './Footer.styles';

function Footer() {
  return (
    <F.FooterContainer>
      <F.CompanyInfo>
        <F.InfoList>
          <li>
            <F.Center>고객센터</F.Center>
          </li>
          <li>
            <F.MiddleSpan>1600-0876</F.MiddleSpan>
            <F.MiddleSpan>09:00 ~ 18:00</F.MiddleSpan>
          </li>
          <li>
            <F.Small>평일: 전체 문의 상담 가능</F.Small>
          </li>
          <li>
            <F.Small>
              주말, 공휴일: 오늘의집 직접배송, 이사/시공/수리 문의 상담 가능
            </F.Small>
          </li>
          <li>
            <F.TalkBtn>카톡 상담(평일 09:00~18:00)</F.TalkBtn>
          </li>
          <li>
            <F.TalkBtn>이메일 문의</F.TalkBtn>
          </li>
        </F.InfoList>
      </F.CompanyInfo>
      <F.CompanyBtnList>
        <F.FirstList>
          <li>
            <F.Small>회사소개</F.Small>
          </li>
          <li>
            <F.Small>채용정보</F.Small>
          </li>
          <li>
            <F.Small>이용약관</F.Small>
          </li>
          <li>
            <F.Small>개인정보</F.Small>
          </li>
          <li>
            <F.Small>처리방침</F.Small>
          </li>
          <li>
            <F.Small>공지사항</F.Small>
          </li>
        </F.FirstList>
        <F.SecondList>
          <li>
            <F.Small>안전거래센터</F.Small>
          </li>
          <li>
            <F.Small>입점신청</F.Small>
          </li>
          <li>
            <F.Small>제휴/광고 문의</F.Small>
          </li>
          <li>
            <F.Small>사업자 구매 회원</F.Small>
          </li>
          <li>
            <F.Small>시공파트너 안내</F.Small>
          </li>
          <li>
            <F.Small>상품광고 소개</F.Small>
          </li>
        </F.SecondList>
      </F.CompanyBtnList>
      <F.Img src="/images/123.png" />
    </F.FooterContainer>
  );
}

export default Footer;
