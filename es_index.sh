GET - 데이터 조회
POST - 데이터 등록
PUT - 데이터 수정
DELETE - 데이터 제거

DELETE maumilgi-diary-contents


PUT maumilgi-diary-contents
{
  "settings": {
    "analysis": {
      "analyzer": {
        "nori_shingle": {
          "tokenizer": "my_nori_tokenizer",
          "filter": ["my_shingle"]
        },
        "nori_keywords": {
          "tokenizer": "my_nori_discard",
          "filter": ["my_posfilter"]
        }
      },
      "tokenizer": {
        "my_nori_tokenizer": {
          "type": "nori_tokenizer",
          "decompound_mode": "mixed"
        },
        "my_nori_discard": {
          "type": "nori_tokenizer",
          "decompound_mode": "discard"
        }
      },
      "filter": {
        "my_shingle": {
          "type": "shingle",
          "token_separator": "",
          "max_shingle_size": 4
        },
        "my_posfilter": {
          "type": "nori_part_of_speech", 
          "stoptags": [
            
            "E", "IC","J","MAG", "MAJ","SC","SE","SF","SH","SL","SN","SP","SSC","SSO","SY","UNA",
                        "VA","VCN","VCP","VSV","VV","VX","XPN","XR","XSA","XSN","XSV"
                        , "NNB", "NNBC",  "NA","NR"
                        ]
        }
      },
      "number_of_shards": 5,
      "number_of_replicas": 1
    }
  },
  "mappings": {
          "properties": {
            "@timestamp": {
          "type": "date",
          "store": "true"
          
        },
     "email": {
		    "type": "text"
	     },
      "title": {
        "type": "text",
        "analyzer": "nori_shingle",
        "search_analyzer": "standard",
        "fields": {
          "keywords": {
            "type": "text",
            "analyzer": "nori_keywords",
            "fielddata": "true"    
          }
        }
      },
      "contents": {
        "type": "text",
        "analyzer": "nori_shingle",
        "search_analyzer": "standard",
        "fields": {
          "keywords": {
            "type": "text",
            "analyzer": "nori_keywords",
            "fielddata": "true"    
          },
          "sentences": {
            "type": "keyword"
          },
          "words": {
            "type": "text",
            "analyzer": "standard",
            "fielddata" : "true"
          }
        }
      }
    }
  }
}
        


POST _bulk
{"index":{"_index":"maumilgi-diary-contents"}}
{"@timestamp": "2020-12-29T03:43:26.625Z","email": "kwontaeheon@gmail.com","name": "Taeheon Kwon", "title": "나의 세번째 이야기", "contents": "나의 세번째 글쓰기 입니다."}
{"index":{"_index":"maumilgi-diary-contents"}}
{"@timestamp": "2020-12-29T03:44:26.625Z","email": "kwontaeheon@gmail.com", "name": "Taeheon Kwon", "title": "나의 네번째 이야기",  "contents": "나의 네번째 글쓰기 입니다." }
{"index":{"_index":"maumilgi-diary-contents"}}
{"@timestamp": "2020-12-29T03:44:26.625Z","email": "kwontaeheon@gmail.com", "name": "Taeheon Kwon", "title": "나의 다섯번째 이야기",  "contents": "나의 다섯번째 글쓰기 입니다." }
{"index":{"_index":"maumilgi-diary-contents"}}
{"@timestamp": "2020-12-29T03:44:26.625Z","email": "kwontaeheon@gmail.com", "name": "Taeheon Kwon", "title": "나의 여섯번째 이야기",  "contents": "나의 여섯번째 글쓰기 입니다." }
{"index":{"_index":"maumilgi-diary-contents"}}
{"@timestamp": "2020-12-29T03:44:26.625Z","email": "kwontaeheon@gmail.com", "name": "Taeheon Kwon", "title": "나의 일곱번째 이야기",  "contents": "나의 일곱번째 글쓰기 입니다." }
{"index":{"_index":"maumilgi-diary-contents"}}
{"@timestamp": "2020-12-29T03:44:26.625Z","email": "kwontaeheon@gmail.com", "name": "Taeheon Kwon", "title": "나의 여덟번째 이야기",  "contents": "나의 여덟번째 글쓰기 입니다." }
{"index":{"_index":"maumilgi-diary-contents"}}
{"@timestamp": "2020-12-29T03:44:26.625Z","email": "kwontaeheon@gmail.com", "name": "Taeheon Kwon", "title": "나의 아홉번째 이야기",  "contents": "나의 아홉번째 글쓰기 입니다." }
{"index":{"_index":"maumilgi-diary-contents"}}
{"@timestamp": "2020-12-29T03:44:26.625Z","email": "kwontaeheon@gmail.com", "name": "Taeheon Kwon", "title": "나의 열번째 이야기",  "contents": "나의 열번째 글쓰기 입니다." }


GET maumilgi-diary-contents/_search 
{
  "query": {
    "bool": {
      "must": [],
      "filter": [
        {
          "bool": {
            "should": [
              {
                "match": {
                  "contents": "글쓰기"
                }
              }
            ],
            "minimum_should_match": 1
          }
        }
      ]
    }
  },
  "highlight": {
    "pre_tags": [
      "#"
    ],
    "post_tags": [
      ""
    ],
    "fields": {
      "*": {}
    }
  }
}



GET maumilgi-diary-contents/_analyze
{
  "analyzer": "nori_keywords",
  "text": "나의 첫번째 글 쓰기 입니다.",
  "explain" : true 
}



GET maumilgi-diary-contents/_search 
{
  "from": 0,
  "size": 1,
  "sort": [{"@timestamp": "desc"}]
}



GET maumilgi-diary-contents/_termvectors/Lg_Fs3YBa0Zs_6PFdVlq?fields=contents.keywords

POST maumilgi-diary-contents/_doc
{
  "@timestamp": "2020-12-28T13:27:26.625Z","email": "kwontaeheon@gmail.com", "name": "Taeheon Kwon", "title": "나의 두번째 이야기",  "contents": "나의 두번째 글쓰기 입니다."
}


POST maumilgi-diary-contents/_delete_by_query
{
  "query": {
    "match": {
      "email": "kwontaeheon@gmail.com"
    }
  }
}
