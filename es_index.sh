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
        "nori_mixed": {
          "tokenizer": "nori_t_mixed",
          "filter": "my_shingle"
        }
      },
      "tokenizer": {
        "nori_t_mixed": {
          "type": "nori_tokenizer",
          "decompound_mode": "mixed"
        }
      },
      "filter": {
        "my_shingle": {
          "type": "shingle",
          "token_separator": "",
          "max_shingle_size": 4
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
        "analyzer": "nori_mixed",
        "search_analyzer": "standard"
      },
      "contents": {
        "type": "text",
        "analyzer": "nori_mixed",
        "search_analyzer": "standard"
      }
    }
          }
}
        


POST _bulk
{"index":{"_index":"maumilgi-diary-contents"}}
{"@timestamp": "2020-12-28T13:26:26.625Z","email": "kwontaeheon@gmail.com","name": "Taeheon Kwon", "title": "나의 첫번째 이야기", "contents": "나의 첫번째 글쓰기 입니다."}
{"index":{"_index":"maumilgi-diary-contents"}}
{"@timestamp": "2020-12-28T13:27:26.625Z","email": "kwontaeheon@gmail.com", "name": "Taeheon Kwon", "title": "나의 두번째 이야기",  "contents": "나의 두번째 글쓰기 입니다." }


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

GET maumilgi-diary-contents/_termvectors/Vg1LqXYBa0Zs_6PFEORo?fields=contents



