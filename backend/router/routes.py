from bson import ObjectId

from database.database import Database
from log.logger import Logger
from schema.schema import GetResponseModel, UpdateVisitorStats, UpdateResponseModel

from fastapi import APIRouter, status

router = APIRouter()
db = Database()
custom_logger = Logger(__name__).get_logger()

@router.get("/get-stats", response_model=GetResponseModel)
async def get_stats():
    document = db.find_one() # Fetch the document from collection
    if not document:
        return GetResponseModel(status_code=status.HTTP_200_OK, 
                                message="successfully fetched the documents")

    return GetResponseModel(status_code=status.HTTP_200_OK, 
                            message="successfully fetched the documents",
                            data=document)


@router.post("/update-stats", response_model=UpdateResponseModel)
async def update_stats(stats: UpdateVisitorStats):
    resp = db.update_document({"_id": ObjectId("669c9fa56b71ca0b7cfd81a5")},
                              {"$set": stats.dict()})
    if not resp:
        return UpdateResponseModel(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            message="could not update the document"
        )
    
    return UpdateResponseModel(
        status_code=status.HTTP_200_OK,
        message="successfully update the document",
        updated_document_count=resp["modified_count"]
    )

@router.on_event("shutdown")
def shutdown():
    custom_logger.info("closed connection to database")
    db.close()